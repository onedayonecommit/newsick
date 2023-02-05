import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from '../file-upload/file-upload.service';

@Injectable()
export class FundingSoundUploadService {
  constructor(
    private readonly db: PrismaService,
    private readonly uploadService: FileUploadService,
  ) {}

  async fundingSoundUpload(mp3: Express.Multer.File, funding_id: number) {}
}
