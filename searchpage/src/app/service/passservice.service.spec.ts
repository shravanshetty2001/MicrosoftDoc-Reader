import { TestBed } from '@angular/core/testing';

import { PassserviceService } from './passservice.service';

describe('PassserviceService', () => {
  let service: PassserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
