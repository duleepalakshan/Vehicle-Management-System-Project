import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // allow all origins
  },
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  // client → server event
  @SubscribeMessage('batchComplete')
  handleBatchComplete(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    console.log('Received batchComplete:', data);
    this.server.emit('batchComplete', data); // broadcast
  }

  // server → client emit manually
  notifyBatchComplete(message: string) {
    this.server.emit('batchComplete', { message });
  }
}
