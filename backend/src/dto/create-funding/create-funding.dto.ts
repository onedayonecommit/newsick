import { fundingOfficialsDto } from './funding-officials.dto';
import { fundingTableDto } from './funding-table.dto';

export class createFundingDto {
  funding: fundingTableDto;
  funding_music_maker: fundingOfficialsDto;
  funding_lyrics_maker: fundingOfficialsDto;
  funding_singer: fundingOfficialsDto;
}
