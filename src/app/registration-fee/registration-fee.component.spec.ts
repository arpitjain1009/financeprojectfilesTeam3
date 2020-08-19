import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFeeComponent } from './registration-fee.component';

describe('RegistrationFeeComponent', () => {
  let component: RegistrationFeeComponent;
  let fixture: ComponentFixture<RegistrationFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
