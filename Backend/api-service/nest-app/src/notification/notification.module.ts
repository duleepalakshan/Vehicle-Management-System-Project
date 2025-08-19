import {Module} from'@nestjs/common';
import {NotificationGateway} from './notification.gateway';


@Module({
    providers: [NotificationGateway],
    exports: [NotificationGateway],
})

export class NotificationModule {}
// This method emits a 'notificationBatchComplete' event with the provided message to all connected clients.