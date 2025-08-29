import { Module } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiController } from './pegawai.controller';

@Module({
  controllers: [PegawaiController],
  providers: [PegawaiService],
})
export class PegawaiModule {}
