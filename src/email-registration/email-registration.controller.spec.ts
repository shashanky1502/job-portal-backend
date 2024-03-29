import { Test, TestingModule } from '@nestjs/testing';
import { EmailRegistrationController } from './email-registration.controller';

describe('EmailRegistrationController', () => {
  let controller: EmailRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailRegistrationController],
    }).compile();

    controller = module.get<EmailRegistrationController>(EmailRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
