import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalManagerComponent } from './rental-manager.component';

describe('RentalManagerComponent', () => {
  let component: RentalManagerComponent;
  let fixture: ComponentFixture<RentalManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
