import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    public async login(input: LoginDto): Promise<string> {
        const user = await this.userService.getUserWithPassword(input.email);
        if (!user) throw new BadRequestException('Invalid email');
        if (!await compare(input.password, user.password)) throw new BadRequestException('Invalid password');
        return 'login';
    }
}
