import { Inject, Injectable } from '@nestjs/common';
import { UserChatGateway } from './user-chat-gateway.interface';
import { USER_CHAT_GATEWAY } from './constants';

export default class GetUserChatRule {
  constructor(private readonly userChatGateway: UserChatGateway) {}

  apply() {
    return 'hello world';
  }
}

@Injectable()
export class SendMessageAuthorizationService {
  getUserChatRule: GetUserChatRule;

  constructor(
    @Inject(USER_CHAT_GATEWAY)
    userChatGateway: UserChatGateway,
  ) {
    this.getUserChatRule = new GetUserChatRule(userChatGateway);
  }

  execute() {
    return 'hello world';
  }
}
