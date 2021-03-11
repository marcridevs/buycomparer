import { TestBed } from '@angular/core/testing';

import { NavTitleServiceService } from './nav-title-service.service';

describe('NavTitleServiceService', () => {
  let service: NavTitleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavTitleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
