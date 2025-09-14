import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-users')
  getTestUsers() {
    return {
      message: 'Test users endpoint',
      users: [
        { id: 'f6afdbc8-526f-4e77-aeae-096ec9210633', name: 'John Doe' },
        { id: '24ba172f-c585-49c2-8da0-7545da625025', name: 'Jane Smith' },
      ]
    };
  }
}
