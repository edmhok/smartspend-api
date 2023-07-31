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
  import { FirstmatrixService } from './firstmatrix.service';
  import { CreateFirstmatrixDto } from './dto/create-firstmatrix.dto';
  import { UpdateFirstmatrixDto } from './dto/update-firstmatrix.dto';
  import { UserService } from '../user/user.service';
  import { AffiliateService } from '../affiliate/affiliate.service';
  
  @Controller('firstmatrix')
  export class FirstmatrixController {
    constructor(
      private firstmatrixService: FirstmatrixService,
      @Inject(forwardRef(() => AffiliateService))
      private readonly affiliateService: AffiliateService,
      @Inject(forwardRef(() => UserService))
      private readonly userService: UserService,
    ) {}
    
    @Get()
    async findAll() {
      return this.firstmatrixService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.firstmatrixService.findOne(+id);
    }
    
    @Get('date/:date')
    async findByDate(@Param('date') date: Date) {
      return this.firstmatrixService.findByDate(date);
    }

    @Post()
    create(@Body() createFirstmatrixDto: CreateFirstmatrixDto) {
      return this.firstmatrixService.create(createFirstmatrixDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: number,
      @Body() updateFirstmatrixDto: UpdateFirstmatrixDto,
    ) {
      this.firstmatrixService.update(+id, updateFirstmatrixDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.firstmatrixService.remove(+id);
      return 'Deleted!';
    }

  }
