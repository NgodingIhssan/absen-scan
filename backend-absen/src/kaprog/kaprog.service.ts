import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateKaprogDto } from './dto/create-kaprog.dto';

@Injectable()
export class KaprogService {
  private prisma = new PrismaClient();

  async create(createKaprogDto: CreateKaprogDto) {
    const hashedPassword = await bcrypt.hash(createKaprogDto.password, 10);
    return this.prisma.user.create({
      data: {
        username: createKaprogDto.username,
        email: createKaprogDto.email,
        password: hashedPassword,
        first_name: createKaprogDto.first_name,
        last_name: createKaprogDto.last_name,
        role: 'KAPROG',
      },
    });
  }

  getDashboard() {
    return { message: 'Kaprogram Dashboard' };
  }
}
