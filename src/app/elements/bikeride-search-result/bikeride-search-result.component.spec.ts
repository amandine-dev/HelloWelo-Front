import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerideSearchResultComponent } from './bikeride-search-result.component';

describe('BikerideSearchResultComponent', () => {
  let component: BikerideSearchResultComponent;
  let fixture: ComponentFixture<BikerideSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerideSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerideSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
