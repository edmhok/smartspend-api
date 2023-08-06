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
import { UnilevelService } from './unilevel.service';
import { CreateUnilevelDto } from './dto/create-unilevel.dto';
import { UpdateUnilevelDto } from './dto/update-unilevel.dto';
import { UserService } from '../user/user.service';
import { AffiliateService } from '../affiliate/affiliate.service';
import { OrderService } from '../order/order.service';
  
  @Controller('unilevel')
  export class UnilevelController {
    constructor(
      private unilevelService: UnilevelService,
      @Inject(forwardRef(() => AffiliateService))
      private readonly affiliateService: AffiliateService,
      @Inject(forwardRef(() => OrderService))
      private readonly orderService: OrderService,
    ) {}
    
    @Get()
    async findAll() {
      return this.unilevelService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.unilevelService.findOne(+id);
    }
    
    @Get('createdAt/:date')
    async findByDate(@Param('date') date: Date) {
      return this.unilevelService.findByDate(date);
    }

    @Post()
    create(@Body() createUnilevelDto: CreateUnilevelDto) {
      return this.unilevelService.create(createUnilevelDto);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: number,
      @Body() updateUnilevelDto: UpdateUnilevelDto,
    ) {
      this.unilevelService.update(+id, updateUnilevelDto);
      return 'Updated';
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      this.unilevelService.remove(+id);
      return 'Deleted!';
    }

  }
