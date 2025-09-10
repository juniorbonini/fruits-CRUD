import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { isUuidDecorator } from '../../common/decorators/isUuidParam';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Post()
  create(@Body(ValidationPipe) createFruitDto: CreateFruitDto) {
    return this.fruitsService.create(createFruitDto);
  }

  @Get()
  findAll() {
    return this.fruitsService.findAll();
  }

  @Get(':id')
  findOne(@isUuidDecorator('id') id: string) {
    return this.fruitsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFruitDto: UpdateFruitDto) {
    return this.fruitsService.update(id, updateFruitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fruitsService.remove(id);
  }
}
