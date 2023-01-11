import { ApiProperty } from '@nestjs/swagger';

export class updateUserResponseDto {
  @ApiProperty({
    description: 'response to request status',
    example: true,
  })
  userUpdateStatus: boolean;

  @ApiProperty({
    description: `http status`,
    example: 201,
  })
  httpStatus: number;
}
