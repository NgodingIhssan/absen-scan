import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Role } from './enums/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(username: string, password: string, role: Role) {
    const hashed = await bcrypt.hash(password, 10);
    const user: User = { id: Date.now(), username, password: hashed, role };
    this.users.push(user);
    return user;
  }

  async findAll() {
    return this.users;
  }

  async findOne(id: number) {
    return this.users.find((u) => u.id === id);
  }

  async findById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  async findByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }
}
