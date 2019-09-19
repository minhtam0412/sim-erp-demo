import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingtestComponent } from './pagingtest.component';

describe('PagingtestComponent', () => {
  let component: PagingtestComponent;
  let fixture: ComponentFixture<PagingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
