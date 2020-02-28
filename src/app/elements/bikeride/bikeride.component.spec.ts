import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerideComponent } from './bikeride.component';

describe('BikerideComponent', () => {
  let component: BikerideComponent;
  let fixture: ComponentFixture<BikerideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
