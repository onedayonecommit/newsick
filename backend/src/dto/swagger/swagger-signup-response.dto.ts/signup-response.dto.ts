import { ApiProperty } from '@nestjs/swagger';
// export type users = {
//   id: number;
//   user_email: string;
//   user_wallet_address: string;
//   user_name: string;
//   is_creator: boolean;
//   created_at: Date;
//   updated_at: Date;
//   ticket: boolean;
//   signup_status: boolean;
//   profile_image: string;
// };

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
