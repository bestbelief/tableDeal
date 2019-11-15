import { TestBed } from '@angular/core/testing';

import { TableViewService } from './table-view.service';

describe('TableViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableViewService = TestBed.get(TableViewService);
    expect(service).toBeTruthy();
  });
});
