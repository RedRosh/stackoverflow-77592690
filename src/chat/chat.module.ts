import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { SendMessageAuthorizationService } from './send-message.service';
import UserChatAdapter from './chat.adapter';
@Module({
  imports: [],
  controllers: [ChatController],
  providers: [SendMessageAuthorizationService, UserChatAdapter],
})
export class ChatModule {}
