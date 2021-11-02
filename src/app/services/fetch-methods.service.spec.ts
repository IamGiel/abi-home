import { TestBed } from '@angular/core/testing';

import { FetchMethodsService } from './fetch-methods.service';

describe('FetchMethodsService', () => {
  let service: FetchMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
