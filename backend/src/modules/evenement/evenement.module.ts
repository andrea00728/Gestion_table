import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvenementController } from 'src/controllers/evenement/evenement.controller';
import { Evenement } from 'src/entities/Evenement';
import { Lieu } from 'src/entities/Lieu';
import { Salle } from 'src/entities/salle';
import { Table_evenement } from 'src/entities/Table';
import { EvenementService } from 'src/services/evenement/evenement.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Evenement,Lieu,Salle,Table_evenement])
    ],
    controllers:[EvenementController],
    providers:[EvenementService],
})
export class EvenementModule {}
