import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairCochangesComponent } from './pair-cochanges.component';

describe('PairCochangesComponent', () => {
  let component: PairCochangesComponent;
  let fixture: ComponentFixture<PairCochangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PairCochangesComponent]
    });
    fixture = TestBed.createComponent(PairCochangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
