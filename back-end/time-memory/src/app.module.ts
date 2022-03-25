import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { AppSchema } from './app.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://minjae:dldjvhs03@cluster0.iskle.mongodb.net/time-memory?retryWrites=true&w=majority'), 
    MongooseModule.forFeature([{name:"App", schema:AppSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
