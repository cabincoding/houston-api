import { Test, TestingModule } from '@nestjs/testing';
import { TerminologyController } from './terminology.controller';

describe('TerminologyController', () => {
  let controller: TerminologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerminologyController],
    }).compile();

    controller = module.get<TerminologyController>(TerminologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
