import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async createUser(input: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }

  public async getUserById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
