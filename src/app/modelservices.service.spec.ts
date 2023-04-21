import { TestBed } from '@angular/core/testing';

import { ModelservicesService } from './modelservices.service';

describe('ModelservicesService', () => {
  let service: ModelservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
