import { TestBed } from '@angular/core/testing';

import { CertserviceService } from './certservice.service';

describe('CertserviceService', () => {
  let service: CertserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
