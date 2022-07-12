import { Module } from '@nestjs/common';
import {} from 'json-rpc-2.0';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
