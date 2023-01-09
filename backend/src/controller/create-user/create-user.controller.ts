import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user/create-user.dto';
import { swaggerSignupDto } from 'src/dto/swagger-signup.dto.ts/swagger.dto';
import { CreateUserService } from 'src/service/create-user/create-user.service';

@Controller('signup/user')
@ApiTags('SIGNUP-UP API')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post('create')
  @ApiOperation({
    summary: 'User-signup-api',
    description:
      '지갑 연결 시 해당 지갑주소로 가입된 정보가 없을 시 회원가입 진행',
  })
  @ApiCreatedResponse({ type: swaggerSignupDto })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }
}
