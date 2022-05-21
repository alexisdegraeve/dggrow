import { TestBed } from '@angular/core/testing';

import { PotatoService } from './potato.service';

describe('PotatoService', () => {
  let service: PotatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
