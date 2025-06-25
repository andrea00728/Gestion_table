import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvenementController } from 'src/controllers/evenement/evenement.controller';
import { Evenement } from 'src/entities/Evenement';
import {  Localisation } from 'src/entities/Location';
import { Salle } from 'src/entities/salle';
import {  TableEvent } from 'src/entities/Table';
import { EvenementService } from 'src/services/evenement/evenement.service';
import { LocationService } from 'src/services/localisation-service/localisation-service.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Evenement,Localisation,Salle,TableEvent])
    ],
    controllers:[EvenementController],
    providers:[EvenementService,LocationService],
})
export class EvenementModule {}
