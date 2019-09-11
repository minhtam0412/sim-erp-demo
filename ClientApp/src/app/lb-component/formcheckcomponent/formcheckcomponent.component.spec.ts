import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcheckcomponentComponent } from './formcheckcomponent.component';

describe('FormcheckcomponentComponent', () => {
  let component: FormcheckcomponentComponent;
  let fixture: ComponentFixture<FormcheckcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcheckcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcheckcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
