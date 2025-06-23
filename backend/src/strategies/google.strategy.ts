/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../services/users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID')!,
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET')!,
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL')!,
      scope: ['email', 'profile'],
    } as StrategyOptions);
    
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { id, name, emails } = profile;
    const userData = {
      email: emails[0].value,
      nom: `${name.givenName} ${name.familyName}`.trim(),
      role: 'organisateur' as 'admin' | 'organisateur', // Rôle par défaut
    };
    const user = await this.usersService.createOrUpdate(userData);
    done(null, { ...user, accessToken });
  }
}