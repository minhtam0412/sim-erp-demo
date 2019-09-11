import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiComboboxComponent } from './multi-combobox.component';

describe('MultiComboboxComponent', () => {
  let component: MultiComboboxComponent;
  let fixture: ComponentFixture<MultiComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
