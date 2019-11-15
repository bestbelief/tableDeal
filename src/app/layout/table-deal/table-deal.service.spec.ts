import { TestBed } from '@angular/core/testing';

import { TableDealService } from './table-deal.service';

describe('TableDealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableDealService = TestBed.get(TableDealService);
    expect(service).toBeTruthy();
  });
});
