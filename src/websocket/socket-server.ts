import { Server } from 'http';
import socketIo from 'socket.io';
import socketConnection from './socket-connection';
import SocketConnection from './socket-connection';

class SocketServer {
  private socketServer: socketIo.Server;

  constructor(http: Server) {
    this.socketServer = socketIo(http);
    this.socketServer.use()
    this.socketServer.on('connection', this.connection);

  }

  private connection(socket: socketIo.Socket): void {
    const connectionInstance = new SocketConnection(socket);
  }
}
