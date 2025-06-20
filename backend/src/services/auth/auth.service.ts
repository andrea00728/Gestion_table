/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GoogleUser } from '../../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(user: GoogleUser): Promise<any> {
    const payload = { email: user.email, sub: user.googleId };
    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }
}