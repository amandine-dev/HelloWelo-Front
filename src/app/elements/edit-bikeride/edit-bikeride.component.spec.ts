import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBikerideComponent } from './edit-bikeride.component';

describe('EditBikerideComponent', () => {
  let component: EditBikerideComponent;
  let fixture: ComponentFixture<EditBikerideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBikerideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBikerideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
