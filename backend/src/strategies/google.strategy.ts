/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Strategy, Profile } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      clientID: '493614615570-p2nq8odouskbim6kqppesns3pc0jjhh8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, displayName, emails, photos } = profile;
    const email = emails && emails.length > 0 ? emails[0].value : null;
    if (!email) {
      throw new Error('Aucun email n\'a été retourné par Google');
    }

    const user = {
      googleId: id,
      name: displayName || 'Unknown',
      email: email,
      role: 'organisateur' as const,
      photoUrl: photos && photos.length > 0 ? photos[0].value : null,
      accessToken: accessToken,
    };
    return this.authService.validateOrRegisterUser(user);
  }
}