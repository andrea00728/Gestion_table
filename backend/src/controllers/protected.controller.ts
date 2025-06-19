import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { SetMetadata } from '@nestjs/common';

@Controller('protected')
export class ProtectedController {
  @Get('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['admin'])
  getAdminData() {
    return { message: 'This is admin-only data' };
  }

  @Get('organisateur')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @SetMetadata('roles', ['organisateur'])
  getOrganisateurData() {
    return { message: 'This is organisateur-only data' };
  }
}