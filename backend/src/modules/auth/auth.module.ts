/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { AuthController } from '../../controllers/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from '../../strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your_very_secure_jwt_secret_1234567890',
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}