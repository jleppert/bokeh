import { PlainObject } from "../core/types";
export declare type Socket = {
    send(data: unknown): void;
};
export declare type Header = {
    msgid?: string;
    msgtype?: string;
    reqid?: string;
    num_buffers?: number;
};
export declare class Message<T> {
    readonly header: Header;
    readonly metadata: PlainObject;
    readonly content: T;
    readonly buffers: Map<string, ArrayBuffer>;
    private constructor();
    static assemble<T>(header_json: string, metadata_json: string, content_json: string): Message<T>;
    assemble_buffer(buf_header: string, buf_payload: ArrayBuffer): void;
    static create<T>(msgtype: string, metadata: PlainObject, content: T): Message<T>;
    static create_header(msgtype: string): Header;
    complete(): boolean;
    send(socket: Socket): void;
    msgid(): string;
    msgtype(): string;
    reqid(): string;
    problem(): string | null;
}
//# sourceMappingURL=message.d.ts.map