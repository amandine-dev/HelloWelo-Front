import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesSortiesComponent } from './les-sorties.component';

describe('LesSortiesComponent', () => {
  let component: LesSortiesComponent;
  let fixture: ComponentFixture<LesSortiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesSortiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesSortiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
