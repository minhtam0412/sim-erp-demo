import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbComponentComponent } from './lb-component.component';

describe('LbComponentComponent', () => {
  let component: LbComponentComponent;
  let fixture: ComponentFixture<LbComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
