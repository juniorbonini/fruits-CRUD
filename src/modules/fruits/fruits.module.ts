import { Module } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';
import { FruitRepository } from '../fruit-repository/fruit.repository';

@Module({
  controllers: [FruitsController],
  providers: [FruitsService, FruitRepository],
})
export class FruitsModule {}
