import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCreateComponent } from './pais-create.component';

describe('PaisCreateComponent', () => {
  let component: PaisCreateComponent;
  let fixture: ComponentFixture<PaisCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
