import { Test, TestingModule } from '@nestjs/testing';
import { FruitsService } from './fruits.service';
import { FruitRepository } from '../fruit-repository/fruit.repository';
import { CreateFruitDto } from './dto/create-fruit.dto';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

describe('FruitsService', () => {
  let service: FruitsService;
  let repository: FruitRepository;

  const defaultFruitDTO: CreateFruitDto = {
    name: 'Banana-Nanica',
    quantity: 155,
    price: 7.00,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitsService, FruitRepository],
    }).compile();

    service = module.get<FruitsService>(FruitsService);
    repository = module.get<FruitRepository>(FruitRepository);
  });

  describe(FruitsService.prototype.create, () => {
    it('Should be sucess', () => {
      jest.spyOn(repository, 'create').mockReturnValue(defaultFruitDTO);
      const fruit = service.create(defaultFruitDTO);
      expect(fruit.name).toBe(defaultFruitDTO.name);
      expect(fruit.id).toBeDefined();
    });
  });

  describe(FruitsService.prototype.create, () => {
    it('Should fail', () => {
      jest.spyOn(repository, 'create').mockImplementationOnce(() => {
        throw new InternalServerErrorException();
      });
      const t = () => service.create(defaultFruitDTO);
      expect(t).toThrow(BadRequestException);
    });
  });

  describe(FruitsService.prototype.findAll, () => {
    it('Should be at least one item', () => {
      jest.spyOn(repository, 'findAll').getMockImplementation();
      const fruit = service.findAll();
      expect(fruit).toBeTruthy();
    });
  });

  describe(FruitsService.prototype.update, () => {
    it('Should be defined', () => {
      jest.spyOn(repository, 'update').mockReturnValue(defaultFruitDTO);
      const fruit = service.update('1', defaultFruitDTO);
      expect(fruit.name).toBe(defaultFruitDTO.name);
      expect(fruit.id).toBeDefined();
    });
  });

  describe(FruitsService.prototype.findOne, () => {
    it('Should return the right item', () => {
      jest.spyOn(repository, 'findOne').mockReturnValue(defaultFruitDTO);
      const fruit = service.findOne('Default');
      expect(fruit.name).toBe(defaultFruitDTO.name);
      expect(fruit.id).toBeDefined();
    });
  });
  describe(FruitsService.prototype.remove, () => {
    it('Should delete one item', () => {
      jest.spyOn(repository, 'remove').mockReturnValue()
      const fruit = service.remove('Default')
      expect(fruit).toBeDefined()
    })
  })

  describe('constructor', () => {
    it('Should instantiate the service', () => {
      const repository = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        remove: jest.fn()
      } as any
      const service = new FruitsService(repository)
      expect(service).toBeDefined()

      expect((service as any).fruitRepository).toBe(repository)
    })
  })
});
