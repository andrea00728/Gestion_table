/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { User } from './entities/user.entity';
import { Evenement } from './entities/Evenement';
import { TableModule } from './modules/table/table.module';
import { InviteModule } from './modules/invite/invite.module';
import { InvitationModule } from './modules/invitation/invitation.module';
import { TableEvent } from './entities/Table';
import { Invitation } from './entities/Invitation';
import { Invite } from './entities/Invite';
import { LocationModule } from './modules/localisation/localisation.module';
import { Localisation } from './entities/Location';
import { Salle } from './entities/salle';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User,Evenement,TableEvent,Invitation,Invite,Localisation,Salle],
        synchronize: true, 
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    TableModule,
    InviteModule,
    InvitationModule,
    LocationModule
  ],
})
export class AppModule {}