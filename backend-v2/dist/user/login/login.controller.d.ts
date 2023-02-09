import { user } from '@prisma/client';
import { loginDto } from './login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    userConnect(loginDto: loginDto): Promise<user | null>;
}
