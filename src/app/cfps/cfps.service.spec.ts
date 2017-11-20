import { TestBed, inject } from '@angular/core/testing';

import { CfpsService } from './cfps.service';

describe('CfpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CfpsService]
    });
  });

  it('should be created', inject([CfpsService], (service: CfpsService) => {
    expect(service).toBeTruthy();
  }));
});
