import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOngletComponent } from './nav-onglet.component';

describe('NavOngletComponent', () => {
  let component: NavOngletComponent;
  let fixture: ComponentFixture<NavOngletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOngletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOngletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
