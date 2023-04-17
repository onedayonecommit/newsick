import { Injectable } from '@nestjs/common';
import { admin } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { adminDto } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly db: PrismaService) {}

  async adminLogin(dto: adminDto): Promise<admin | string> {
    const result = await this.db.admin.findFirst({
      where: { admin_id: dto.admin_id, admin_password: dto.admin_pw },
    });
    if (result) {
      return result;
    } else {
      return 'who are you?';
    }
  }
}
