/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nom: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  mot_de_passe: string;

  @Column({ type: 'enum', enum: ['admin', 'organisateur'], default: 'organisateur' })
  role: 'admin' | 'organisateur';
  googleId: string;
  lastName: string;
  firstName: string;
  picture: string;
  accessToken: string;
}