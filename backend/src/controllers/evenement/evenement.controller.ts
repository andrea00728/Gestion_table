import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEvenementDTO } from 'src/dto/CreateEvenementDTO';
import { EvenementService } from 'src/services/evenement/evenement.service';

@Controller('evenement')
export class EvenementController {
    constructor(
        private readonly evenementService:EvenementService
    ){}

    @Post('/create')
    create(@Body() dto:CreateEvenementDTO){
        return this.evenementService.create(dto);
    }

    @Get('/affichage information')
    findAll()
    {
        return this.evenementService.findAll();
    }
}
