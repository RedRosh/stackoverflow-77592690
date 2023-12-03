import { Inject, Injectable } from '@nestjs/common';
import { UserChatGateway } from './user-chat-gateway.interface';
import UserChatAdapter from './chat.adapter';

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
    @Inject(UserChatAdapter)
    userChatGateway: UserChatGateway,
  ) {
    this.getUserChatRule = new GetUserChatRule(userChatGateway);
  }

  execute() {
    return 'hello world';
  }
}
