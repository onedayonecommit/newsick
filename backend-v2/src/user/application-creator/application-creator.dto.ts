import { bool } from 'aws-sdk/clients/signer';
import { IsBoolean, IsString } from 'class-validator';

export class applicationCreatorDto {
  @IsString()
  user_wallet_address: string;
  @IsBoolean()
  is_creator: bool;
}
