import { TestBed } from '@angular/core/testing';

import { WikiDataServiceService } from './wiki-data-service.service';

describe('WikiDataServiceService', () => {
  let service: WikiDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
