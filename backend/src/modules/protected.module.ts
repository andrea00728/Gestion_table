import { Module } from '@nestjs/common';
import { ProtectedController } from '../controllers/protected.controller';
import { RolesGuard } from '../guards/roles.guard';

@Module({
  controllers: [ProtectedController],
  providers: [RolesGuard],
})
export class ProtectedModule {}