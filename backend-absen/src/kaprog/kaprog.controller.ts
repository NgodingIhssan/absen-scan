import { Controller, Post, Body, Get } from '@nestjs/common';
import { KaprogService } from './kaprog.service';
import { CreateKaprogDto } from './dto/create-kaprog.dto';

@Controller('kaprog')
export class KaprogController {
  constructor(private kaprogService: KaprogService) {}

  @Post()
  create(@Body() createKaprogDto: CreateKaprogDto) {
    return this.kaprogService.create(createKaprogDto);
  }

  @Get('dashboard')
  getDashboard() {
    return this.kaprogService.getDashboard();
  }
}
