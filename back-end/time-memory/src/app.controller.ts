import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  async saveDB(@Body('date') date: string, @Body('time') time: string, @Body('context') context: string) {
    const generatedId = await this.appService.create(date, time, context);

    return {id: generatedId};
  }

  @Get('getAll')
  async getAll(){
    const apps = await this.appService.getAll();
    return apps;
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: string){
    await this.appService.delete(id);
    return null;

  }
}
