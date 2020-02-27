import { TestBed } from '@angular/core/testing';

import { CvpersonneService } from './cvpersonne.service';

describe('CvpersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvpersonneService = TestBed.get(CvpersonneService);
    expect(service).toBeTruthy();
  });
});
