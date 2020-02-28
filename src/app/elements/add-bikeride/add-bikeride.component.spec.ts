import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBikerideComponent } from './add-bikeride.component';

describe('AddBikerideComponent', () => {
  let component: AddBikerideComponent;
  let fixture: ComponentFixture<AddBikerideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBikerideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBikerideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
