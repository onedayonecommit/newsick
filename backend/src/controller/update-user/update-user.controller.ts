import { Body, Controller, Patch } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { updateUserRequestDto } from 'src/dto/swagger/request/swagger-update-request.dto/update-user.dto';
import { updateUserResponseDto } from 'src/dto/swagger/response/swagger-update-response.dto/update-user-response';
import { updateUserDto } from 'src/dto/update-user/update-user-dto';
import { UpdateUserService } from 'src/service/update-user/update-user.service';

@Controller('update/user')
@ApiTags('USER INFO UPDATE API')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Patch('info')
  @ApiOperation({
    description: `고유한 지갑 주소 기반으로 유저 정보 변경 지갑 주소는 필수로 받아야하는 사항 나머지는 전부 선택 사항`,
    summary: 'user-info-update-api',
  })
  @ApiBody({
    type: updateUserRequestDto,
  })
  @ApiCreatedResponse({ type: updateUserResponseDto })
  async userInfoUpdate(@Body() updateUserDto: updateUserDto): Promise<object> {
    return await this.updateUserService.userInfoUpdate(updateUserDto);
  }
}