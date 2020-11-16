import { TestBed } from '@angular/core/testing';

import { SpnTicketsService } from './spn-tickets.service';

describe('SpnTicketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpnTicketsService = TestBed.get(SpnTicketsService);
    expect(service).toBeTruthy();
  });
});
