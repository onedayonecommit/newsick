import { Controller, Get, Post } from '@nestjs/common';
import { adminDto } from './admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async adminLogin(dto: adminDto) {
    return await this.adminService.adminLogin(dto);
  }
}
