import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { userProfileImageUpdateResponseDto } from 'src/dto/swagger/response/swagger-profileimg-response.dto/profile-image-update.dto';
import { ProfileUploadsService } from 'src/service/profile-uploads/profile-uploads.service';

@Controller('profile/uploads')
@ApiTags('USER PROFILE IMAGE UPDATE API')
export class ProfileUploadsController {
  constructor(private readonly profileUploadService: ProfileUploadsService) {}

  @Post()
  @ApiOperation({
    description: '10Mb 이하 프로필 이미지로 사용할 받아서 S3에 저장',
    summary: 'user-profile-image upload to aws s3',
  })
  @ApiCreatedResponse({
    type: userProfileImageUpdateResponseDto,
  })
  @UseInterceptors(FileInterceptor('user_profile_image')) // docs에서는 쓰라는데 왜 써야되는지 찾는중
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() user_wallet_address: string,
  ): Promise<object> {
    console.log(file);
    return await this.profileUploadService.uploadFile(
      file,
      user_wallet_address,
    );
  }
}
