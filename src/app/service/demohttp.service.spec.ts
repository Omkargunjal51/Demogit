import { TestBed } from '@angular/core/testing';

import { DemohttpService } from './demohttp.service';

describe('DemohttpService', () => {
  let service: DemohttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemohttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
