import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserListComponent } from './organiser-list.component';

describe('OrganiserListComponent', () => {
  let component: OrganiserListComponent;
  let fixture: ComponentFixture<OrganiserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
