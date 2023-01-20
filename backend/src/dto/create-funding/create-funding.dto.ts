import { IsObject } from 'class-validator';
import { fundingOfficialsDto } from './funding-officials.dto';
import { fundingTableDto } from './funding-table.dto';

export class createFundingDto {
  @IsObject()
  funding: fundingTableDto;
  @IsObject()
  funding_music_maker: fundingOfficialsDto;
  @IsObject()
  funding_lyrics_maker: fundingOfficialsDto;
  @IsObject()
  funding_singer: fundingOfficialsDto;
}
