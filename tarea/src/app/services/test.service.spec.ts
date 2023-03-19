import { TestBed } from '@angular/core/testing';

import { Info2 } from './test.service';

describe('TestService', () => {
  let service: Info2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( Info2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
