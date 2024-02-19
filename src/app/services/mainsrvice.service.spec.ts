import { TestBed } from '@angular/core/testing';

import { MainsrviceService } from './mainsrvice.service';

describe('MainsrviceService', () => {
  let service: MainsrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainsrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
