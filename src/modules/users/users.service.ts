import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/users.entities';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

  async getAllUser() {
    return this.usersRepository.find();
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findByUserName(name: string) {
    return this.usersRepository.findOne({ where: { name } });
  }

  async createUser(userData: Partial<Users>) {
    const hashedPassword = await bcrypt.hash(userData.password ?? '', 10);
    const user = this.usersRepository.create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword
    });
    user.created = new Date();
    user.updated = new Date();
    return this.usersRepository.save(user);
  }

  async validateUsser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
