import { TestBed } from '@angular/core/testing';

import { EmployeeActivatorServiceService } from './employee-activator-service.service';

describe('EmployeeActivatorServiceService', () => {
  let service: EmployeeActivatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeActivatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
