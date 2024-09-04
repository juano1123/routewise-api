import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor() { }

    @Post('login')
    public async login() {
        return 'login';
    }
}
