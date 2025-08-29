import { Module } from '@nestjs/common';
import { KaprogService } from './kaprog.service';
import { KaprogController } from './kaprog.controller';

@Module({
  controllers: [KaprogController],
  providers: [KaprogService],
})
export class KaprogModule {}
