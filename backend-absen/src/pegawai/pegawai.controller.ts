import { Controller, Post, Body, Get } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';

@Controller('pegawai')
export class PegawaiController {
  constructor(private pegawaiService: PegawaiService) {}

  @Post()
  create(@Body() createPegawaiDto: CreatePegawaiDto) {
    return this.pegawaiService.create(createPegawaiDto);
  }

  @Get('dashboard')
  getDashboard() {
    return this.pegawaiService.getDashboard();
  }
}
