import { ApiProperty } from '@nestjs/swagger';

export class userProfileImageUpdateResponseDto {
  @ApiProperty({
    description: 'user profile image upload to aws s3 success',
    example: true,
  })
  uploadStatus: boolean;

  @ApiProperty({
    description: 'this api response http status',
    example: 201,
  })
  httpStatus: number;
}
