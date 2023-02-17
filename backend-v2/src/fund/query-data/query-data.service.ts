// import { Injectable } from '@nestjs/common';
// import { funding } from '@prisma/client';
// import { PrismaService } from 'src/prisma.service';
// import { createFundDto } from '../create-fund/create-fund.dto';
// @Injectable()
// export class QueryDataService {
//   constructor(private readonly db: PrismaService) {}

//   //
//   async find_ingData(_tokenId: number[]){
//     // const _arr: createFundDto[] = [];
//     // for (let i = 0; i < _tokenId.length; i++) {
//     //   const _find = await this.db.funding.findMany({
//     //     where: { id: _tokenId[i] },
//     //   });
//     //   _arr.push(_find);
//     // }
//     // return _arr;
//     for (let i = 0; i < _tokenId.length; i++) {
//       const _find = await this.db.funding.findMany({
//         select: { id: _tokenId[i] },
//       })
//     }
//   }
// }
