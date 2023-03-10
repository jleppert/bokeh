var _a, _b, _c, _d, _e, _f, _g, _h;
import { isObject, isArray } from "./types";
import { unreachable } from "./assert";
import { equals } from "./eq";
import { serialize } from "../serializer";
import { encode_NDArray } from "./serialization";
const __ndarray__ = Symbol("__ndarray__");
export class Uint8NDArray extends Uint8Array {
    constructor(seq, shape) {
        super(seq);
        this[_a] = true;
        this.dtype = "uint8";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_a = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Uint8NDArray.__name__ = "Uint8NDArray";
export class Int8NDArray extends Int8Array {
    constructor(seq, shape) {
        super(seq);
        this[_b] = true;
        this.dtype = "int8";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_b = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Int8NDArray.__name__ = "Int8NDArray";
export class Uint16NDArray extends Uint16Array {
    constructor(seq, shape) {
        super(seq);
        this[_c] = true;
        this.dtype = "uint16";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_c = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Uint16NDArray.__name__ = "Uint16NDArray";
export class Int16NDArray extends Int16Array {
    constructor(seq, shape) {
        super(seq);
        this[_d] = true;
        this.dtype = "int16";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_d = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Int16NDArray.__name__ = "Int16NDArray";
export class Uint32NDArray extends Uint32Array {
    constructor(seq, shape) {
        super(seq);
        this[_e] = true;
        this.dtype = "uint32";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_e = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Uint32NDArray.__name__ = "Uint32NDArray";
export class Int32NDArray extends Int32Array {
    constructor(seq, shape) {
        super(seq);
        this[_f] = true;
        this.dtype = "int32";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_f = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Int32NDArray.__name__ = "Int32NDArray";
export class Float32NDArray extends Float32Array {
    constructor(seq, shape) {
        super(seq);
        this[_g] = true;
        this.dtype = "float32";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_g = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Float32NDArray.__name__ = "Float32NDArray";
export class Float64NDArray extends Float64Array {
    constructor(seq, shape) {
        super(seq);
        this[_h] = true;
        this.dtype = "float64";
        this.shape = shape ?? (is_NDArray(seq) ? seq.shape : [this.length]);
        this.dimension = this.shape.length;
    }
    [(_h = __ndarray__, equals)](that, cmp) {
        return cmp.eq(this.shape, that.shape) && cmp.arrays(this, that);
    }
    [serialize](_serializer) {
        return encode_NDArray(this);
    }
}
Float64NDArray.__name__ = "Float64NDArray";
export function is_NDArray(v) {
    return isObject(v) && __ndarray__ in v;
}
export function ndarray(array, options = {}) {
    let { dtype } = options;
    if (dtype == null) {
        if (array instanceof ArrayBuffer || isArray(array)) {
            dtype = "float64";
        }
        else {
            dtype = (() => {
                switch (true) {
                    case array instanceof Uint8Array: return "uint8";
                    case array instanceof Int8Array: return "int8";
                    case array instanceof Uint16Array: return "uint16";
                    case array instanceof Int16Array: return "int16";
                    case array instanceof Uint32Array: return "uint32";
                    case array instanceof Int32Array: return "int32";
                    case array instanceof Float32Array: return "float32";
                    case array instanceof Float64Array: return "float64";
                    default:
                        unreachable();
                }
            })();
        }
    }
    const { shape } = options;
    switch (dtype) {
        case "uint8": return new Uint8NDArray(array, shape);
        case "int8": return new Int8NDArray(array, shape);
        case "uint16": return new Uint16NDArray(array, shape);
        case "int16": return new Int16NDArray(array, shape);
        case "uint32": return new Uint32NDArray(array, shape);
        case "int32": return new Int32NDArray(array, shape);
        case "float32": return new Float32NDArray(array, shape);
        case "float64": return new Float64NDArray(array, shape);
    }
}
//# sourceMappingURL=ndarray.js.map