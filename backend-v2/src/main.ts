import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { hi2 } from 'src/contractInfo';
import { ethers } from 'ethers';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: false,
    }),
  );

  const prisma = new PrismaClient();
  setInterval(async () => {
    // const eachETH = 0.000001;
    // let totalETH = 0;
    if ((Math.floor(new Date().getTime() / 1000) + 32400) % 86400 == 0) {
      // const arr = [];
      console.log('정각임', new Date());
      // const result = await prisma.funding_music_player.findMany();
      // result.map((e) => {
      //   arr.push(ethers.parseEther(`${e.player_count * eachETH}`));
      //   totalETH += e.player_count * eachETH;
      // });
      // await hi2({ value: ethers.parseEther(`${totalETH}`), amount: arr });
      // await prisma.funding_music_player.updateMany({
      //   data: { player_count: 0 },
      // });
    }
  }, 1000);
  app.listen(8080);
}
bootstrap();
