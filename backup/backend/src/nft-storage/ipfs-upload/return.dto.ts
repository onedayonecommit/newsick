import { IsString } from 'class-validator';

export class ipfsReturnDto {
  @IsString()
  fileUrl: string;
  @IsString()
  metadataUrl: string;
}
