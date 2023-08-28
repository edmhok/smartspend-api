/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PatronService } from './patron.service';
import { PatronController } from './patron.controller';
import { patronSchema } from './patron.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Patron', schema: patronSchema},
    ]
  )],
  controllers: [PatronController],
  providers: [PatronService],
})
export class PatronModule {}