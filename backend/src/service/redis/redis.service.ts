import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { setRedisDto } from 'src/dto/redis/set-redis.dto';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  // 캐시에 항목 추가
  async setRedis(dto: setRedisDto) {
    const setResult = await this.cacheManager.set(
      dto.user_email,
      dto.user_uuid,
      300,
    );
    console.log(setResult);
  }

  // 캐시의 특정 항목 검색
  async getRedis(user_email: string): Promise<unknown | undefined> {
    const value = await this.cacheManager.get(user_email);
    return value;
  }
}
