/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user ?? undefined;
  }

  async createOrUpdate(userData: Partial<User>): Promise<User> {
    const existingUser = userData.email ? await this.findByEmail(userData.email) : undefined;
    if (existingUser) {
      await this.usersRepository.update(existingUser.id, userData);
      const updatedUser = await this.usersRepository.findOne({ where: { id: existingUser.id } });
      if (!updatedUser) {
        throw new Error('User not found after update');
      }
      return updatedUser;
    }
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }
}