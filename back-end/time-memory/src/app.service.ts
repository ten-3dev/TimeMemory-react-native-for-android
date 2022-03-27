import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { App } from './app.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('App') private readonly AppModel: Model<App>) {}

  async create(date: string, time: string, context: string){
    const newApp = new this.AppModel({ date, time, context });
    const result = await newApp.save();
    return result.id as string;
  }

  async getAll(){
    const result = await this.AppModel.find().exec();
    return result.map((item) => ({
      id: item.id,
      date: item.date,
      time: item.time,
      context: item.context
    }));
  }

  async delete(getId: string){
    const result = await this.AppModel.deleteOne({_id: getId}).exec();
    if(result.deletedCount === 0){
      throw new NotFoundException('해당 ID를 찾지 못함');
    }
  }
}
