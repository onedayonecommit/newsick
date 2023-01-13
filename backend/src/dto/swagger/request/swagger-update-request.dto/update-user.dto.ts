import { ApiProperty } from '@nestjs/swagger';

export class updateUserRequestDto {
  @ApiProperty({
    description: 'Requirements',
    example: 'f12',
    required: true,
  })
  user_wallet_address: string;

  @ApiProperty({
    description: 'user want to change info anything',
    example: 'test123456@naver.com',
    required: false,
  })
  user_email?: string;

  @ApiProperty({
    description: `user_name`,
    example: 'kingisback',
    required: false,
  })
  user_name?: string;
}
