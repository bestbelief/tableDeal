import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDealComponent } from './table-deal.component';

describe('TableDealComponent', () => {
  let component: TableDealComponent;
  let fixture: ComponentFixture<TableDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
