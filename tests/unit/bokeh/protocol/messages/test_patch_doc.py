#-----------------------------------------------------------------------------
# Copyright (c) 2012 - 2022, Anaconda, Inc., and Bokeh Contributors.
# All rights reserved.
#
# The full license is in the file LICENSE.txt, distributed with this software.
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Boilerplate
#-----------------------------------------------------------------------------
from __future__ import annotations # isort:skip

import pytest ; pytest

#-----------------------------------------------------------------------------
# Imports
#-----------------------------------------------------------------------------

# Standard library imports
from json import loads

# External imports
import numpy as np

# Bokeh imports
import bokeh.document as document
from bokeh.core.properties import Instance, Int, Nullable
from bokeh.document.events import (
    ColumnDataChangedEvent,
    ColumnsPatchedEvent,
    ColumnsStreamedEvent,
    ModelChangedEvent,
    RootAddedEvent,
    RootRemovedEvent,
)
from bokeh.model import Model
from bokeh.models import ColumnDataSource
from bokeh.protocol import Protocol

# Module under test
from bokeh.protocol.messages.patch_doc import process_document_events # isort:skip

#-----------------------------------------------------------------------------
# Setup
#-----------------------------------------------------------------------------

proto = Protocol()

#-----------------------------------------------------------------------------
# General API
#-----------------------------------------------------------------------------

class AnotherModelInTestPatchDoc(Model):
    bar = Int(1)

class SomeModelInTestPatchDoc(Model):
    foo = Int(2)
    child = Nullable(Instance(Model))


class TestPatchDocument:
    def _sample_doc(self):
        doc = document.Document()
        another = AnotherModelInTestPatchDoc()
        doc.add_root(SomeModelInTestPatchDoc(child=another))
        doc.add_root(SomeModelInTestPatchDoc())
        return doc

    def test_create_no_events(self) -> None:
        with pytest.raises(ValueError):
            proto.create("PATCH-DOC", [])

    def test_create_multiple_docs(self) -> None:
        sample1 = self._sample_doc()
        obj1 = next(iter(sample1.roots))
        event1 = ModelChangedEvent(sample1, obj1, 'foo', obj1.foo, 42, 42)

        sample2 = self._sample_doc()
        obj2 = next(iter(sample2.roots))
        event2 = ModelChangedEvent(sample2, obj2, 'foo', obj2.foo, 42, 42)
        with pytest.raises(ValueError):
            proto.create("PATCH-DOC", [event1, event2])

    def test_create_model_changed(self) -> None:
        sample = self._sample_doc()
        obj = next(iter(sample.roots))
        event = ModelChangedEvent(sample, obj, 'foo', obj.foo, 42, 42)
        proto.create("PATCH-DOC", [event])

    def test_create_then_apply_model_changed(self) -> None:
        sample = self._sample_doc()

        foos = []
        for r in sample.roots:
            foos.append(r.foo)
        assert foos == [ 2, 2 ]

        obj = next(iter(sample.roots))
        assert obj.foo == 2
        event = ModelChangedEvent(sample, obj, 'foo', obj.foo, 42, 42)
        msg = proto.create("PATCH-DOC", [event])

        copy = document.Document.from_json_string(sample.to_json_string())
        msg.apply_to_document(copy)

        foos = []
        for r in copy.roots:
            foos.append(r.foo)
        foos.sort()
        assert foos == [ 2, 42 ]

    def test_patch_event_contains_setter(self) -> None:
        sample = self._sample_doc()
        root = None
        other_root = None
        for r in sample.roots:
            if r.child is not None:
                root = r
            else:
                other_root = r
        assert root is not None
        assert other_root is not None
        new_child = AnotherModelInTestPatchDoc(bar=56)

        cds = ColumnDataSource(data={'a': np.array([0., 1., 2.])})
        sample.add_root(cds)

        mock_session = object()
        def sample_document_callback_assert(event):
            """Asserts that setter is correctly set on event"""
            assert event.setter is mock_session
        sample.on_change(sample_document_callback_assert)

        # Model property changed
        event = ModelChangedEvent(sample, root, 'child', root.child, new_child, new_child)
        msg = proto.create("PATCH-DOC", [event])
        msg.apply_to_document(sample, mock_session)
        assert msg.buffers == []

        # RootAdded
        event2 = RootAddedEvent(sample, root)
        msg2 = proto.create("PATCH-DOC", [event2])
        msg2.apply_to_document(sample, mock_session)
        assert msg2.buffers == []

        # RootRemoved
        event3 = RootRemovedEvent(sample, root)
        msg3 = proto.create("PATCH-DOC", [event3])
        msg3.apply_to_document(sample, mock_session)
        assert msg3.buffers == []

        # ColumnsStreamed
        event4 = ModelChangedEvent(sample, cds, 'data', 10, None, None,
                                   hint=ColumnsStreamedEvent(sample, cds, {"a": [3]}, None, mock_session))
        msg4 = proto.create("PATCH-DOC", [event4])
        msg4.apply_to_document(sample, mock_session)
        assert msg4.buffers == []

        # ColumnsPatched
        event5 = ModelChangedEvent(sample, cds, 'data', 10, None, None,
                                   hint=ColumnsPatchedEvent(sample, cds, {"a": [(0, 11)]}))
        msg5 = proto.create("PATCH-DOC", [event5])
        msg5.apply_to_document(sample, mock_session)
        assert msg5.buffers == []

        # ColumnDataChanged, use_buffers=False
        event6 = ModelChangedEvent(sample, cds, 'data', {'a': np.array([0., 1.])}, None, None,
                                   hint=ColumnDataChangedEvent(sample, cds))
        msg6 = proto.create("PATCH-DOC", [event6], use_buffers=False)
        msg6.apply_to_document(sample, mock_session)
        assert msg6.buffers == []

        print(cds.data)
        # ColumnDataChanged, use_buffers=True
        event7 = ModelChangedEvent(sample, cds, 'data', {'a': np.array([0., 1.])}, None, None,
                                   hint=ColumnDataChangedEvent(sample, cds))
        msg7 = proto.create("PATCH-DOC", [event7])
        # can't test apply, doc not set up to *receive* binary buffers
        # msg7.apply_to_document(sample, mock_session)
        assert len(msg7.buffers) == 1
        buf = msg7.buffers.pop()
        assert len(buf) == 2
        assert isinstance(buf[0], dict)
        assert list(buf[0]) == ['id']

        # reports CDS buffer *as it is* Normally events called by setter and
        # value in local object would have been already mutated.
        assert buf[1] == np.array([11., 1., 2., 3]).tobytes()

class _Event:
    def __init__(self, refs, bufs) -> None:
        self.refs=refs
        self.bufs=bufs
    def generate(self, refs, bufs):
        refs.update(self.refs)
        if bufs is not None:
            bufs.extend(self.bufs)
        return "junk"

class _M(Model):
    pass

def test_process_document_events_no_refs() -> None:
    e = _Event([], [])
    r, bufs = process_document_events([e])
    assert bufs == []
    json = loads(r)
    assert sorted(list(json)) == ['events', 'references']
    assert len(json['references']) == 0
    assert len(json['events']) == 1
    assert json['events'] == ['junk']

def test_process_document_events_with_refs() -> None:
    e = _Event([_M(),_M()], [])
    r, bufs = process_document_events([e])
    assert bufs == []
    json = loads(r)
    assert sorted(list(json)) == ['events', 'references']
    assert len(json['references']) == 2
    assert len(json['events']) == 1
    assert json['events'] == ['junk']

def test_process_document_events_no_buffers() -> None:
    e = _Event([], [])
    r, bufs = process_document_events([e])
    assert bufs == []
    json = loads(r)
    assert sorted(list(json)) == ['events', 'references']
    assert len(json['references']) == 0
    assert len(json['events']) == 1
    assert json['events'] == ['junk']

def test_process_document_events_with_buffers() -> None:
    e = _Event([], [1,2])
    r, bufs = process_document_events([e])
    assert bufs == [1, 2]
    json = loads(r)
    assert sorted(list(json)) == ['events', 'references']
    assert len(json['references']) == 0
    assert len(json['events']) == 1
    assert json['events'] == ['junk']

def test_process_document_events_mixed() -> None:
    e1 = _Event([], [1,2])
    e2 = _Event([_M(),_M(),_M()], [3,4, 5])
    e3 = _Event([_M(),_M()], [])
    r, bufs = process_document_events([e1, e2, e3])
    assert bufs == [1, 2, 3, 4, 5]
    json = loads(r)
    assert sorted(list(json)) == ['events', 'references']
    assert len(json['references']) == 5
    assert len(json['events']) == 3
    assert json['events'] == ['junk', 'junk', 'junk']

def test_process_document_events_with_buffers_and_use_buffers_false() -> None:
    e = _Event([], [1,2])
    r, bufs = process_document_events([e], use_buffers=False)
    assert bufs == []
    json = loads(r)
    assert sorted(list(json)) == ['events', 'references']
    assert len(json['references']) == 0
    assert len(json['events']) == 1
    assert json['events'] == ['junk']

#-----------------------------------------------------------------------------
# Dev API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Private API
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Code
#-----------------------------------------------------------------------------
