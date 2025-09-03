import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    // contoh sederhana (dummy)
    if (email === 'admin@mail.com' && password === '123456') {
      return {
        success: true,
        user: { role: 'admin', email },
        token: 'fake-jwt-token'
      };
    }

    throw new UnauthorizedException('Email atau password salah');
  }
}
