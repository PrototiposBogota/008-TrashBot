import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoscreateComponent } from './eventoscreate.component';

describe('EventoscreateComponent', () => {
  let component: EventoscreateComponent;
  let fixture: ComponentFixture<EventoscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
