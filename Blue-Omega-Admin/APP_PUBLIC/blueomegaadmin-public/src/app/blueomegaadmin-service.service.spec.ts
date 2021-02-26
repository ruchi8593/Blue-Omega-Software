import { TestBed } from '@angular/core/testing';

import { BlueomegaadminServiceService } from './blueomegaadmin-service.service';

describe('BlueomegaadminServiceService', () => {
  let service: BlueomegaadminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueomegaadminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
