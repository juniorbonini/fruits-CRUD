import { Test, TestingModule } from '@nestjs/testing';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';
import { FruitRepository } from '../fruit-repository/fruit.repository';

describe('FruitsController', () => {
  let controller: FruitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitsController],
      providers: [FruitsService, FruitRepository],
    }).compile();

    controller = module.get<FruitsController>(FruitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
