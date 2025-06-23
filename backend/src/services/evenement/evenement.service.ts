import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEvenementDTO } from 'src/dto/CreateEvenementDTO';
import { Evenement } from 'src/entities/Evenement';
import { Repository } from 'typeorm';

@Injectable()
export class EvenementService {
   constructor(
    @InjectRepository(Evenement)
    private evenementRepository:Repository<Evenement>,
   ){}

//    creation de l'evenement
   create(dto:CreateEvenementDTO){
    const Evenement_=this.evenementRepository.create(dto);
    return this.evenementRepository.save(Evenement_)
   }
   findAll(){
    return this.evenementRepository.find({relations:['lieux']});
   }
}
