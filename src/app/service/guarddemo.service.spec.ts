import { TestBed } from '@angular/core/testing';

import { GuarddemoService } from './guarddemo.service';

describe('GuarddemoService', () => {
  let service: GuarddemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuarddemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
