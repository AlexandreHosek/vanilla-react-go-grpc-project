package message_v1

import (
	"context"
	"log"

	messagerpc "github.com/les4principes/simple-website/backend/message/v1/rpc"
)

type service struct {
	messagerpc.UnimplementedServiceServer
}

func NewService() *service {
	return &service{}
}

func (s *service) ReturnMessage(
	ctx context.Context,
	in *messagerpc.ReturnMessageRequest,
) (*messagerpc.ReturnMessageResponse, error) {
	log.Printf("Message received: %v", in.GetMessage())
	return &messagerpc.ReturnMessageResponse{Message: "Message send: " + in.GetMessage()}, nil
}
