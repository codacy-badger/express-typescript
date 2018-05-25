import { Server } from 'http';
import socketIo from 'socket.io';

class SocketConnection {
  private socketConnection: socketIo.Socket;
  constructor(socketConnection: socketIo.Socket) {
    this.socketConnection = socketConnection;
  }
}

export default SocketConnection;
