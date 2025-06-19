import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth.module';
import { ProtectedModule } from './modules/protected.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nickmyaro',
      database: 'gestion_evenement',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    ProtectedModule,
  ],
})
export class AppModule {}