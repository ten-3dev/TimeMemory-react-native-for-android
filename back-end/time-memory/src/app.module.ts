import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { AppSchema } from './app.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MongooseModule.forFeature([{name:"App", schema:AppSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
