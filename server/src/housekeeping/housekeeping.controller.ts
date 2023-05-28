import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HousekeepingService } from './housekeeping.service';
import { CreateHousekeepingDto } from './dto/create-housekeeping.dto';
import { UpdateHousekeepingDto } from './dto/update-housekeeping.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

@Controller('housekeeping')
@ApiTags('housekeeping')
export class HousekeepingController {
  constructor(private readonly housekeepingService: HousekeepingService) {}

  @Post()
  create(@Body() createHousekeepingDto: CreateHousekeepingDto) {
    return this.housekeepingService.create(createHousekeepingDto);
  }

  @Get()
  findAll() {
    return this.housekeepingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.housekeepingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHousekeepingDto: UpdateHousekeepingDto,
  ) {
    return this.housekeepingService.update(+id, updateHousekeepingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.housekeepingService.remove(+id);
  }
}
