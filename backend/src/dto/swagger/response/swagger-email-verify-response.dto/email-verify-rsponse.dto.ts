import { ApiProperty } from '@nestjs/swagger';

export class emailVerifyResponseDto {
  @ApiProperty({
    description: 'signUp Confirm Status',
    example: true,
  })
  signUpConfirmStatus: boolean;

  @ApiProperty({
    description: 'httpStatus',
    example: 201,
  })
  httpStatus: number;
}
