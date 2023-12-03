import { Controller, Get } from '@nestjs/common';
import { SendMessageAuthorizationService } from './send-message.service';

@Controller('/chat')
export class ChatController {
  constructor(
    private sendMessageAuthorizationService: SendMessageAuthorizationService,
  ) {}

  @Get('/authorization')
  isAuthorized() {
    return JSON.stringify('hello world');
  }
}
