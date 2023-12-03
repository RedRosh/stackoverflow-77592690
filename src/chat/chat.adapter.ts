import { Injectable } from '@nestjs/common';
import { UserChatGateway } from './user-chat-gateway.interface';

@Injectable()
export default class UserChatAdapter implements UserChatGateway {
  getUserChat() {
    return 'hello world';
  }
}
