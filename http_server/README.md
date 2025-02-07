# HTTP 1.0 Server

## Guide

https://joaoventura.net/blog/2017/python-webserver/

## Concepts

- HTTP
- Sockets

## Notes

- socket.AF_INET: Specifies the address family for IPv4.

- socket.SOCK_STREAM: Specifies the socket type as a TCP socket (connection-oriented).

- Setting socket options: SO_REUSEADDR: Allows the server to reuse the address, preventing "Address already in use" errors when restarting the server.

- listen(1): The server starts listening for incoming connections. The 1 specifies the backlog size, i.e., the maximum number of queued connections. Here, it's 1.

- accept(): Blocks execution and waits for a client to connect.
  Returns a new socket object client_connection for the connected client and the client's address client_address.

- recv(1024): Receives up to 1024 bytes of data from the client.
  decode(): Converts the received bytes into a string.


