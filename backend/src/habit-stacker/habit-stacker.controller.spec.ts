import { Test, TestingModule } from '@nestjs/testing';
import { HabitStackerController } from './habit-stacker.controller';

describe('HabitStackerController', () => {
  let controller: HabitStackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitStackerController],
    }).compile();

    controller = module.get<HabitStackerController>(HabitStackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
