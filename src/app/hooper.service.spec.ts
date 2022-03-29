import { TestBed } from '@angular/core/testing';

import { HooperService } from './hooper.service';

describe('HooperService', () => {
  let service: HooperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HooperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
