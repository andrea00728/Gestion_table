/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Req, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const user = await this.authService.validateUser(req.user);
    return {
      message: 'Authentification réussie',
      user,
      access_token: user.access_token,
    };
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  getProtected(@Req() req) {
    return {
      message: 'Route protégée accessible uniquement avec un JWT valide',
      user: req.user,
    };
  }

  @Post('set-role')
  @UseGuards(AuthGuard('jwt'))
  async setRole(@Req() req, @Body() body: { role: 'admin' | 'organisateur' }) {
    const user = await this.usersService.findByEmail(req.user.email);
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    await this.usersService.createOrUpdate({ ...user, role: body.role });
    const googleUser = {
      ...user,
      googleId: user.googleId || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      picture: user.picture || '',
      accessToken: user.accessToken || '',
    };
    const updatedUser = await this.authService.validateUser(googleUser);
    return {
      message: 'Rôle mis à jour',
      user: updatedUser,
      access_token: updatedUser.access_token,
    };
  }
}