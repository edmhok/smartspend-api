import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PatronService } from './patron.service';
import { CreatePatronDto } from './dto/create-patron.dto';
import { UpdatePatronDto } from './dto/update-patron.dto';
import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';


@Controller('patrons')
export class PatronController {
  constructor(
    private patronService: PatronService,
  ) {}
  
  @UseGuards(JwtAuthGuard)
    @Get()
    async fillAll() {
      return this.patronService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString('utf-8'),
    );
    const patron_id = decodedToken.patronPayload.id;

    return this.patronService.findOne(+patron_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.patronService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPatronDto: CreatePatronDto) {
    return this.patronService.create(createPatronDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatronDto: UpdatePatronDto) {
    return this.patronService.update(+id, updatePatronDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.patronService.remove(+id);
    return { status: 'success' };
  }
}