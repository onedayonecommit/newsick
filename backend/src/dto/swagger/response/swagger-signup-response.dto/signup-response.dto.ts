import { ApiProperty } from '@nestjs/swagger';

export class signUpResponseDto {
  @ApiProperty({
    description: `sign_up_status`,
    example: true,
  })
  signUpStatus: boolean;

  @ApiProperty({
    description: `response http code`,
    example: 200,
  })
  httpStatus: number;
}
