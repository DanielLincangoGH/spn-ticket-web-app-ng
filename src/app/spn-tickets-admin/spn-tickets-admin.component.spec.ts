import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpnTicketsAdminComponent } from './spn-tickets-admin.component';

describe('SpnTicketsAdminComponent', () => {
  let component: SpnTicketsAdminComponent;
  let fixture: ComponentFixture<SpnTicketsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpnTicketsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpnTicketsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
