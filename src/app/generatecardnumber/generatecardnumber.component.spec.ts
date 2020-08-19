import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratecardnumberComponent } from './generatecardnumber.component';

describe('GeneratecardnumberComponent', () => {
  let component: GeneratecardnumberComponent;
  let fixture: ComponentFixture<GeneratecardnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratecardnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratecardnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
