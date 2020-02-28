import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerideListComponent } from './bikeride-list.component';

describe('BikerideListComponent', () => {
  let component: BikerideListComponent;
  let fixture: ComponentFixture<BikerideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
