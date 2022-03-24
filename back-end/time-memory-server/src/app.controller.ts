import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getAll')
  getAll(){
      return "getAll"
  }

  @Post('create')
  create(){
      return "create"
  }

  @Delete('remove/:id')
  remove(){
      return "remove"
  }
}
