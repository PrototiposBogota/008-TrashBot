import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoslistComponent } from './eventoslist.component';

describe('EventoslistComponent', () => {
  let component: EventoslistComponent;
  let fixture: ComponentFixture<EventoslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
