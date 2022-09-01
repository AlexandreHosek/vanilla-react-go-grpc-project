/**
 * @fileoverview gRPC-Web generated client stub for message.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_message_v1_message_pb from '../../../proto/message/v1/message_pb';


export class ServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoReturnMessage = new grpcWeb.MethodDescriptor(
    '/message.v1.Service/ReturnMessage',
    grpcWeb.MethodType.UNARY,
    proto_message_v1_message_pb.ReturnMessageRequest,
    proto_message_v1_message_pb.ReturnMessageResponse,
    (request: proto_message_v1_message_pb.ReturnMessageRequest) => {
      return request.serializeBinary();
    },
    proto_message_v1_message_pb.ReturnMessageResponse.deserializeBinary
  );

  returnMessage(
    request: proto_message_v1_message_pb.ReturnMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_message_v1_message_pb.ReturnMessageResponse>;

  returnMessage(
    request: proto_message_v1_message_pb.ReturnMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_message_v1_message_pb.ReturnMessageResponse) => void): grpcWeb.ClientReadableStream<proto_message_v1_message_pb.ReturnMessageResponse>;

  returnMessage(
    request: proto_message_v1_message_pb.ReturnMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_message_v1_message_pb.ReturnMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/message.v1.Service/ReturnMessage',
        request,
        metadata || {},
        this.methodInfoReturnMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/message.v1.Service/ReturnMessage',
    request,
    metadata || {},
    this.methodInfoReturnMessage);
  }

}

