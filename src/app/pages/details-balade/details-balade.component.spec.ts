import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBaladeComponent } from './details-balade.component';

describe('DetailsBaladeComponent', () => {
  let component: DetailsBaladeComponent;
  let fixture: ComponentFixture<DetailsBaladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsBaladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
