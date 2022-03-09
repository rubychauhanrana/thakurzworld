import { TestBed } from '@angular/core/testing';

import { AuthGuard.ServivesService } from './auth-guard.servives.service';

describe('AuthGuard.ServivesService', () => {
  let service: AuthGuard.ServivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard.ServivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
