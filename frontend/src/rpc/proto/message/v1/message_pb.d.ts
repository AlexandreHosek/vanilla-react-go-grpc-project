import * as jspb from 'google-protobuf'



export class ReturnMessageRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ReturnMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReturnMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReturnMessageRequest): ReturnMessageRequest.AsObject;
  static serializeBinaryToWriter(message: ReturnMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReturnMessageRequest;
  static deserializeBinaryFromReader(message: ReturnMessageRequest, reader: jspb.BinaryReader): ReturnMessageRequest;
}

export namespace ReturnMessageRequest {
  export type AsObject = {
    message: string,
  }
}

export class ReturnMessageResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ReturnMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReturnMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReturnMessageResponse): ReturnMessageResponse.AsObject;
  static serializeBinaryToWriter(message: ReturnMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReturnMessageResponse;
  static deserializeBinaryFromReader(message: ReturnMessageResponse, reader: jspb.BinaryReader): ReturnMessageResponse;
}

export namespace ReturnMessageResponse {
  export type AsObject = {
    message: string,
  }
}

