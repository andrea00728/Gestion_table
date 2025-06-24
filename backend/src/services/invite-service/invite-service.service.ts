// src/guest/guest.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { parse } from 'csv-parse';
import { Readable } from 'stream';
import { Invite } from 'src/entities/Invite';
import { TableService } from '../table-service/table-service.service';
import { CreateInviteDto } from 'src/dto/CreateInviteDto';


@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(Invite)
    private readonly guestRepository: Repository<Invite>,
    private readonly tableService: TableService,
  ) {}

  async createGuest(dto: CreateInviteDto): Promise<Invite> {
    const inv = this.guestRepository.create(dto);
    return this.guestRepository.save(inv);
  }

  async importGuests(file: Express.Multer.File, eventId: number): Promise<Invite[]> {
    const guests: Invite[] = [];
    const parser = parse({ columns: true });

    const stream = Readable.from(file.buffer.toString());
    stream.pipe(parser);

    for await (const record of parser) {
      const guest = this.guestRepository.create({
        nom: record.nom,
        prenom: record.prenom,
        email: record.email,
        sex: record.sex, 
        event: { id: eventId },
      });
      guests.push(await this.guestRepository.save(guest));
    }

    await this.autoAssignGuests(eventId);
    return guests;
  }

  async autoAssignGuests(eventId: number): Promise<void> {
    const guests = await this.guestRepository.find({
      where: {
        event: { id: eventId },
        table: IsNull(),
      },
    });
    const tables = await this.tableService.findByEvent(eventId);

    for (const guest of guests) {
      for (const table of tables) {
        const availableSeats = await this.tableService.getAvailableSeats(table.id);
        if (availableSeats > 0) {
          // Calculer le numéro de place en fonction des invités déjà attribués
          const currentGuests = await this.guestRepository.find({
            where: { table: { id: table.id } },
          });
          const seatNumber = currentGuests.length + 1;
          await this.tableService.assignGuestToTable(guest.id, table.id, seatNumber);
          break;
        }
      }
    }
  }

  async findByEvent(eventId: number): Promise<Invite[]> {
    return this.guestRepository.find({
      where: { event: { id: eventId } },
      relations: ['table'],
    });
  }

  async update(id: number, data: Partial<Invite>): Promise<Invite> {
    await this.guestRepository.update(id, data);
    const invite = await this.guestRepository.findOne({
      where: { id },
      relations: ['table'],
    });
    if (!invite) {
      throw new BadRequestException(`Invité avec ID ${id} non trouvé`);
    }
    return invite;
  }
}