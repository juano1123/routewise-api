import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRoleEnum } from './dtos/user-role.enum';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  public async getAllUsers(): Promise<UserDto[]> {
    return this.userRepository.find({
      where: [
        { role: UserRoleEnum.TRAVELER },
        { role: UserRoleEnum.VIEWER },
      ],
    });
  }

  public async createUser(input: CreateUserDto): Promise<UserDto> {
    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }

  public async getUserById(id: string): Promise<UserDto> {
    return this.userRepository.findOne({ where: { id } });
  }

  public async getUserByEmail(email: string): Promise<UserDto> {
    return this.userRepository.findOne({ where: { email } });
  }

  public getUserWithPassword(email: string): Promise<UserDto> {
    const query = this.userRepository.createQueryBuilder('user');
    query.where(`user.email = :email`, { email });
    query.addSelect('user.password');
    return query.getOne();
  }
}
