import { TestBed } from '@angular/core/testing';

import { AuthGuardServiceService } from './auth-guard.service.service';

describe('AuthGuard.ServiceService', () => {
  let service: AuthGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
