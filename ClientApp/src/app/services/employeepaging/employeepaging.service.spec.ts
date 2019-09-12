import { TestBed } from '@angular/core/testing';

import { EmployeePagingService } from './employeepaging.service';

describe('EmployeepagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeePagingService = TestBed.get(EmployeePagingService);
    expect(service).toBeTruthy();
  });
});
