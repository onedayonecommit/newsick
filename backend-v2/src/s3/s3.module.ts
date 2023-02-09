import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ImageUploadController } from './image-upload/image-upload.controller';
import { ImageUploadService } from './image-upload/image-upload.service';
import { FileUploadService } from './file-upload/file-upload.service';
import { NormalSoundUploadService } from './normal-sound-upload/normal-sound-upload.service';
import { NormalSoundUploadController } from './normal-sound-upload/normal-sound-upload.controller';
import { FundingSoundUploadController } from './funding-sound-upload/funding-sound-upload.controller';
import { FundingSoundUploadService } from './funding-sound-upload/funding-sound-upload.service';

@Module({
  controllers: [
    ImageUploadController,
    NormalSoundUploadController,
    FundingSoundUploadController,
  ],
  providers: [
    PrismaService,
    ImageUploadService,
    NormalSoundUploadService,
    FundingSoundUploadService,
    FileUploadService,
  ],
})
export class S3Module {}
