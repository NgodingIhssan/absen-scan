import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // ganti pakai env kalau production
    });
  }

  async validate(payload: any) {
    // ambil user by ID dari payload
    const user = await this.usersService.findById(payload.sub);
    if (!user) return null;

    return { id: user.id, username: user.username, role: user.role };
  }
}
