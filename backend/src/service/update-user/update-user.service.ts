import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { updateUserDto } from 'src/dto/update-user/update-user-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UpdateUserService {
  constructor(private readonly prismaService: PrismaService) {}
  async userInfoUpdate(updateDto: updateUserDto): Promise<object> {
    try {
      await this.prismaService.users.update({
        data: updateDto,
        where: { user_wallet_address: updateDto.user_wallet_address },
      });
      return { userUpdateStatus: true, httpStatus: 201 };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        '회원정보 수정 에러',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
