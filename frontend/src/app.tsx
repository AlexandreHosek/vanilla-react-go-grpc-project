import ReactDOM from "react-dom";
import React from "react";
import * as grpcWeb from "grpc-web";
import { ServiceClient } from "./rpc/proto/message/v1/MessageServiceClientPb";
import {
  ReturnMessageRequest,
  ReturnMessageResponse,
} from "./rpc/proto/message/v1/message_pb";

function App() {



  return (
    <div>
      <h1>React app bundled with esbuild</h1>
      <p>Result form gRPC call with grpc-web:</p>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          const messageService = new ServiceClient(
            "http://localhost:8080",
            null,
            null,
          );
          const request = new ReturnMessageRequest();
          request.setMessage("message send by grpc-web");
          messageService.returnMessage(
            request,
            { "custom-header-1": "value1" },
            (err: grpcWeb.RpcError, response: ReturnMessageResponse) => {
              if (err) {
                if (err.code !== grpcWeb.StatusCode.OK) {
                  console.log(
                    `Error when making grpc-web call with error code: ${err.code} and error message: ${err.message}`,
                  );
                }
              }
              console.log(
                `Got grpc-web response with message: ${response.getMessage()}`,
              );
            },
          );
        }}
      >
        Make the gRPC call
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
