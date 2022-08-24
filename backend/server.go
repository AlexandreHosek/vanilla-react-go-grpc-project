package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	"github.com/les4principes/simple-website/backend/message/v1"
	messagerpc "github.com/les4principes/simple-website/backend/message/v1/rpc"
	"google.golang.org/grpc"
)

func main() {
	log := log.Default()
	port := 9000
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	defer lis.Close()

	opts := []grpc.ServerOption{}
	srv := grpc.NewServer(opts...)
	defer srv.Stop()

	messageService := message_v1.NewService()
	messagerpc.RegisterServiceServer(srv, messageService)

	go func() {
		log.Println(fmt.Sprintf("server started on port %d...", port))
		if err := srv.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()

	// wait for control C to exit
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)
	<-ch
	log.Println("stopping the server")
}
