message-generate:
	protoc \
		--go_out=backend/message/v1 \
		--go-grpc_out=backend/message/v1 \
		--plugin=protoc-gen-grpc-web=frontend/node_modules/.bin/protoc-gen-grpc-web \
		--js_out=import_style=commonjs,binary:./frontend/src/rpc/ \
		--grpc-web_out=import_style=typescript,mode=grpcweb:./frontend/src/rpc/ \
		./proto/message/v1/message.proto
# 		--ts_out=service=true:./frontend/src/rpc/ \


# --go_out=plugins=grpc:./server \
#     --plugin=protoc-gen-ts=./app/node_modules/.bin/protoc-gen-ts \
#     --ts_out=service=true:./app/src \
#     --js_out=import_style=commonjs,binary:./app/src \
#     ./proto/hackernews.proto
