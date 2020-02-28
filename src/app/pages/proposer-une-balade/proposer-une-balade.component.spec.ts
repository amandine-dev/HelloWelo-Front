import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerUneBaladeComponent } from './proposer-une-balade.component';

describe('ProposerUneBaladeComponent', () => {
  let component: ProposerUneBaladeComponent;
  let fixture: ComponentFixture<ProposerUneBaladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerUneBaladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerUneBaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
