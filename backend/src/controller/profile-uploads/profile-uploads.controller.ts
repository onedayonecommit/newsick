import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { userProfileImageUpdateResponseDto } from 'src/dto/swagger/response/swagger-profileimg-response.dto/profile-image-update.dto';
import { FileUploadsService } from 'src/service/file-uploads/file-uploads.service';

const ApiOperationOption = {
  description: '10Mb 이하 프로필 이미지로 사용할 받아서 S3에 저장',
  summary: 'user-profile-image upload to aws s3',
};
const ApiCreatedResponseOption = {
  type: userProfileImageUpdateResponseDto,
};

@Controller('profile/uploads')
@ApiTags('USER PROFILE IMAGE UPDATE API')
export class ProfileUploadsController {
  constructor(private readonly FileUploadsService: FileUploadsService) {}

  @Post()
  @ApiOperation(ApiOperationOption)
  @ApiCreatedResponse(ApiCreatedResponseOption)
  @UseInterceptors(FileInterceptor('user_profile_image')) // docs에서는 쓰라는데 왜 써야되는지 찾는중
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Query('user_wallet_address') user_wallet_address: string,
  ): Promise<object> {
    return await this.FileUploadsService.profileImageUpload(
      file,
      user_wallet_address,
    );
  }
}
