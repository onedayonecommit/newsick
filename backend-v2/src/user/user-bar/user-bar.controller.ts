import { Controller, Post } from '@nestjs/common';
import { UserBarService } from './user-bar.service';

@Controller('user-bar')
export class UserBarController {
    constructor(private readonly userBarService: UserBarService) { }
    
    @Post()
}
