import { Body, Controller, Post } from '@nestjs/common';
import { ImagedownloadService } from 'src/service/funding/imagedownload.service';

@Controller('imagedownload')
export class ImagedownloadController {
  constructor(private readonly imageDownloadService: ImagedownloadService) {}

  @Post()
  async getimage(
    @Body() dto: { user_wallet_address: string },
  ): Promise<string> {
    console.log(dto);
    return await this.imageDownloadService.downloadFile(
      dto.user_wallet_address,
    );
  }
}
