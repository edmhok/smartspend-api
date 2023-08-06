import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Patch,
    Inject,
    forwardRef,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { SecondmatrixService } from './secondmatrix.service';
  import { CreateSecondmatrixDto } from './dto/create-secondmatrix.dto';
  import { UpdateSecondmatrixDto } from './dto/update-secondmatrix.dto';
  import { UserService } from '../user/user.service';
  
  @Controller('secondmatrix')
  export class SecondmatrixController {
    constructor(
      private secondmatrixService: SecondmatrixService,
      @Inject(forwardRef(() => UserService))
      private readonly userService: UserService,
    ) {}
    
    @Get()
    async findAll() {
      return this.secondmatrixService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.secondmatrixService.findOne(+id);
    }
    
    @Get('createdAt/:date')
    async findByDate(@Param('date') date: Date) {
      return this.secondmatrixService.findByDate(date);
    }

    @Post()
    create(@Body() createSecondmatrixDto: CreateSecondmatrixDto) {
      return this.secondmatrixService.create(createSecondmatrixDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: number,
      @Body() updateSecondmatrixDto: UpdateSecondmatrixDto,
    ) {
      this.secondmatrixService.update(+id, updateSecondmatrixDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.secondmatrixService.remove(+id);
      return 'Deleted!';
    }

  }
