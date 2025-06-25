import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  UploadedFile,
  UseInterceptors,
  ParseIntPipe,
  Put,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateInviteDto } from 'src/dto/CreateInviteDto';
import { Invite } from 'src/entities/Invite';
import { Express } from 'express';
import { GuestService } from 'src/services/invite-service/invite-service.service';

@Controller('guests')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  //  Créer un invité manuellement
  @Post('/create')
  async create(@Body() dto: CreateInviteDto): Promise<Invite> {
    return await this.guestService.createGuest(dto);
  }

  //  Importer un fichier CSV avec des invités (multipart/form-data)
  @Post('import/:eventId')
  @UseInterceptors(FileInterceptor('file'))
  async importGuests(
    @UploadedFile() file: Express.Multer.File,
    @Param('eventId', ParseIntPipe) eventId: number,
  ): Promise<Invite[]> {
    if (!file) {
      throw new HttpException('Aucun fichier fourni.', HttpStatus.BAD_REQUEST);
    }
    return await this.guestService.importGuests(file, eventId);
  }

  //  Récupérer tous les invités d’un événement
  @Get('event/:eventId')
  async getGuestsByEvent(
    @Param('eventId', ParseIntPipe) eventId: number,
  ): Promise<Invite[]> {
    return await this.guestService.findByEvent(eventId);
  }

  //  Mise à jour d’un invité
  @Put(':id')
  async updateGuest(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: Partial<Invite>,
  ): Promise<Invite> {
    return await this.guestService.update(id, updateDto);
  }
}
