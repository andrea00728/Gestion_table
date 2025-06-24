// src/guest/entities/guest.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TableEvent } from './Table';
import { Evenement } from './Evenement';


@Entity()
export class Invite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column({ enum: ['M', 'F'] })
  sex: string;

  @ManyToOne(() => Evenement, (event) => event.invites)
  event: Evenement;

  @ManyToOne(() => TableEvent, (table) => table.guests, { nullable: true })
  table: TableEvent;

  @Column({ nullable: true })
  nombre_place: number;

  @Column({ nullable: true })
  qrCode: string; // URL ou contenu du QR code
}