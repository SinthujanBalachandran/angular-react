import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeItemComponent } from './view-employee-item.component';

describe('ViewEmployeeItemComponent', () => {
  let component: ViewEmployeeItemComponent;
  let fixture: ComponentFixture<ViewEmployeeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
