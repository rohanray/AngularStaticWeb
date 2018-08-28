import { TestBed, inject } from '@angular/core/testing';

import { PendboxService } from './pendbox.service';

describe('PendboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendboxService]
    });
  });

  it('should be created', inject([PendboxService], (service: PendboxService) => {
    expect(service).toBeTruthy();
  }));
});
