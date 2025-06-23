import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evenement } from './entities/Evenement';
import { EvenementService } from './services/evenement/evenement.service';
import { EvenementController } from './controllers/evenement/evenement.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // change selon ta DB (mysql, postgres, etc.)
      database: 'database.sqlite', // nom de la DB
      entities: [Evenement], // ajoute tes entités ici
      synchronize: true, // à utiliser en dev seulement (crée les tables auto)
    }),
    TypeOrmModule.forFeature([Evenement]), // pour utiliser l'entité dans les services
  ],
  providers: [EvenementService],
  controllers: [EvenementController],
})
export class AppModule {}