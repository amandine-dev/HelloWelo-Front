import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModalExempleComponent } from './mat-modal-exemple.component';

describe('MatModalExempleComponent', () => {
  let component: MatModalExempleComponent;
  let fixture: ComponentFixture<MatModalExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatModalExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatModalExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
