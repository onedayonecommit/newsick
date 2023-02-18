import { PartialType } from '@nestjs/mapped-types';
import { joinDto } from '../join/join.dto';

export class changeDto extends PartialType(joinDto) {}
