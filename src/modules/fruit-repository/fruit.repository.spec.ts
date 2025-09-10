import { Test, TestingModule } from '@nestjs/testing';
import { FruitRepository } from './fruit.repository';

describe('FruitRepository', () => {
  let provider: FruitRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitRepository],
    }).compile();

    provider = module.get<FruitRepository>(FruitRepository);
  });
  it('Should be defined', () => {
    expect(provider).toBeDefined();
  });
});
