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

export class swaggerSignupDto {
  @ApiProperty({
    description: `user's nick-name`,
  })
  user_name: string;

  @ApiProperty({
    description: `user's email`,
  })
  user_email: string;

  @ApiProperty({
    description: `user's profile-image`,
  })
  user_profile_image: any;
}
