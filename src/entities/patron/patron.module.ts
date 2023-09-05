/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PatronService } from './patron.service';
import { PatronController } from './patron.controller';
import { patronSchema } from './patron.model';
import { MongooseModule } from '@nestjs/mongoose';
import { S3Service } from 'src/utils/S3Service';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Patron', schema: patronSchema},
    ]
  )],
  controllers: [PatronController],
  providers: [PatronService, S3Service],
})
export class PatronModule {}