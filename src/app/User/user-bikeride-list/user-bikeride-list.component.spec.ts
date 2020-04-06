import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBikerideListComponent } from './user-bikeride-list.component';

describe('UserBikerideListComponent', () => {
  let component: UserBikerideListComponent;
  let fixture: ComponentFixture<UserBikerideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBikerideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBikerideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
