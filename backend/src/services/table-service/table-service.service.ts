// src/table/table.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTableDto } from 'src/dto/CreateTaleDto';
import { Invite } from 'src/entities/Invite';
import { TableEvent } from 'src/entities/Table';
import { Repository } from 'typeorm';


@Injectable()
export class TableService {
  constructor(
    @InjectRepository(TableEvent)
    private readonly tableRepository: Repository<TableEvent>,
    @InjectRepository(Invite)
    private readonly guestRepository: Repository<Invite>,
  ) {}

  async createTable(dto: CreateTableDto): Promise<TableEvent> {
    if(!dto||dto.numero===undefined || dto.capacite===undefined || !dto.eventId){
      throw new BadRequestException("donnee de creation de table incomplets");
    }
    const table = this.tableRepository.create({
      numero: dto.numero,
      capacite: dto.capacite,
      event: { id: dto.eventId },
    });
    return this.tableRepository.save(table);
  }

  async assignGuestToTable(guestId: number, tableId: number, seatNumber: number): Promise<TableEvent> {
    const table = await this.tableRepository.findOne({
      where: { id: tableId },
      relations: ['guests'],
    });
    if (!table) {
      throw new BadRequestException('Table non trouvée');
    }
    if (table.placeReserve >= table.capacite) {
      throw new BadRequestException('Table est pleine');
    }

    const invite = await this.guestRepository.findOne({ where: { id: guestId } });
    if (!invite) {
      throw new BadRequestException('Invité non trouvé');
    }

    invite.table = table;
    invite.nombre_place = seatNumber;
    await this.guestRepository.save(invite);

    table.placeReserve++;
    return this.tableRepository.save(table);
  }

  async getAvailableSeats(tableId: number): Promise<number> {
    const table = await this.tableRepository.findOne({ where: { id: tableId } });
    if (!table) {
      throw new BadRequestException('Table non trouvée');
    }
    return table.capacite - table.placeReserve;
  }

  async findByEvent(eventId: number): Promise<TableEvent[]> {
    return this.tableRepository.find({
      where: { event: { id: eventId } },
      relations: ['guests'],
    });
  }
}