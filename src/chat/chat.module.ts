import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { SendMessageAuthorizationService } from './send-message.service';
import UserChatAdapter from './chat.adapter';
import { USER_CHAT_GATEWAY } from './constants';
@Module({
  imports: [],
  controllers: [ChatController],
  providers: [
    SendMessageAuthorizationService,
    {
      provide: USER_CHAT_GATEWAY,
      useClass: UserChatAdapter,
    },
  ],
})
export class ChatModule {}
