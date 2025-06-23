/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { User } from './entities/user.entity';
import { ProfileController } from './controllers/profile/profile.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'], // Spécifie le fichier .env (optionnel, par défaut .env)
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbHost = configService.get<string>('DB_HOST');
        const dbPort = configService.get<number>('DB_PORT');
        const dbUsername = configService.get<string>('DB_USERNAME');
        const dbPassword = configService.get<string>('DB_PASSWORD');
        const dbDatabase = configService.get<string>('DB_DATABASE');

        if (!dbHost || !dbPort || !dbUsername || !dbPassword || !dbDatabase) {
          throw new Error('Les variables d\'environnement de la base de données sont manquantes');
        }

        return {
          type: 'postgres',
          host: dbHost,
          port: dbPort,
          username: dbUsername,
          password: dbPassword,
          database: dbDatabase,
          entities: [User],
          // synchronize: process.env.NODE_ENV !== 'production',
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [ProfileController],
})
export class AppModule {}