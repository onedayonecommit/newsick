import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class signUpUserRequestDto {
  @IsEmail()
  @ApiProperty({
    description: `user's email`,
    example: 'test1234@naver.com',
    required: true,
  })
  user_email: string;

  @IsString()
  @ApiProperty({
    description: `user's nickname`,
    example: 'testnickname',
    required: true,
  })
  user_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: `user's wallet_address`,
    example: '0x00000000000000000',
    required: true,
  })
  user_wallet_address: string;

  @IsBoolean()
  @ApiProperty({
    description: `when first signup false / false == not creator , true == creator `,
    example: false,
    required: false,
  })
  is_creator: boolean;

  @IsBoolean()
  @ApiProperty({
    description: `when first signup false / false == this user doesn't have streming ticket , true == this user has streming ticket `,
    example: false,
    required: false,
  })
  ticket: boolean;
}
