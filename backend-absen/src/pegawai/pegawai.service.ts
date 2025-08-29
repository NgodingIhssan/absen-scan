import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';

@Injectable()
export class PegawaiService {
  private prisma = new PrismaClient();

  async create(createPegawaiDto: CreatePegawaiDto) {
    const hashedPassword = await bcrypt.hash(createPegawaiDto.password, 10);
    return this.prisma.user.create({
      data: {
        username: createPegawaiDto.username,
        email: createPegawaiDto.email,
        password: hashedPassword,
        first_name: createPegawaiDto.first_name,
        last_name: createPegawaiDto.last_name,
        role: 'PEKERJA',
      },
    });
  }

  getDashboard() {
    return { message: 'Pegawai Dashboard' };
  }
}
