import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  public async getAllUsers(): Promise<UserDto[]> {
    return await this.userService.getAllUsers();
  }

  @Post()
  public async createUser(@Body() input: CreateUserDto): Promise<UserDto> {
    return await this.userService.createUser(input);
  }

  @Get(':id')
  public async getUserById(@Param() { id }: { id: string }): Promise<UserDto> {
    return await this.userService.getUserById(id);
  }
}
