import SocketServer
import socket
class MyTCPServer(SocketServer.ThreadingTCPServer):
	allow_reuse_address=True
class MyTCPServerHandler(SocketServer.BaseRequestHandler):
	def handle(self):
		try:
			print "Recieved Data..."
			data = (self.request.recv(1024).decode('UTF-8'))
			print(data)
			rstr=data
			self.request.sendall(rstr);
		except Exception as e:
			print("exception while recieving message: ",e)
if __name__ == '__main__':
	server = MyTCPServer(('127.0.0.1',3001),MyTCPServerHandler)
	server.serve_forever()
