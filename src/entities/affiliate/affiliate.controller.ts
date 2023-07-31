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
    import { AffiliateService } from './affiliate.service';
    import { CreateAffiliateDto } from './dto/create-affiliate.dto';
    import { UpdateAffiliateDto } from './dto/update-affiliate.dto';
    import { UserService } from '../user/user.service';
    import { JwtAuthGuard } from 'src/authentication/guard/jwt-auth.guard';
    
    @Controller('affiliate')
    export class AffiliateController {
        constructor(
        private affiliateService: AffiliateService,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        
        ) {}
    
        @UseGuards(JwtAuthGuard)
        @Get()
        async findAll() {
          return this.affiliateService.findAll();
        }
      
        @UseGuards(JwtAuthGuard)
        @Get(':id')
        async findOne(@Param('id') id: number) {
          return this.affiliateService.findOne(+id);
        }
        
        @UseGuards(JwtAuthGuard)
        @Get('date/:date')
        async findByDate(@Param('date') date: Date) {
          return this.affiliateService.findByDate(date);
        }
    
        @UseGuards(JwtAuthGuard)
        @Post()
        create(@Body() createAffiliateDto: CreateAffiliateDto) {
          return this.affiliateService.create(createAffiliateDto);
        }
      
        @UseGuards(JwtAuthGuard)
        @Patch(':id')
        update(
          @Param('id') id: number,
          @Body() updateAffiliateDto: UpdateAffiliateDto,
        ) {
          this.affiliateService.update(+id, updateAffiliateDto);
          return 'Updated';
        }
      
        @UseGuards(JwtAuthGuard)
        @Delete(':id')
        remove(@Param('id') id: number) {
          this.affiliateService.remove(+id);
          return 'Deleted!';
        }
    
    }
