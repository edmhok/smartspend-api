/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patron } from './patron.entity';
import { PatronService } from './patron.service';
import { PatronController } from './patron.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Patron]),
  ],
  controllers: [PatronController],
  providers: [PatronService],
})
export class PatronModule {}