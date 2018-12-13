import { TestBed } from '@angular/core/testing';

import { TrNavService } from './tr-nav.service';

describe('TrNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrNavService = TestBed.get(TrNavService);
    expect(service).toBeTruthy();
  });
});
