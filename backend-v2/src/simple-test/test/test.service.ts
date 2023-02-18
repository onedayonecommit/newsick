import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TestService {
  constructor(private readonly db: PrismaService) {}

  async allUpdate() {
    return await this.db.user.updateMany({
      data: { user_profile_image: 'good' },
    });
  }

  async allGet() {
    return await this.db.user.findMany();
  }
}
