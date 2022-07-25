import { TestBed } from '@angular/core/testing';

import { ServiceItemsService } from './service-items.service';

describe('ServiceItemsService', () => {
  let service: ServiceItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
