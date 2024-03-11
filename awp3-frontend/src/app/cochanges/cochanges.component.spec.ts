import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochangesComponent } from './cochanges.component';

describe('CochangesComponent', () => {
  let component: CochangesComponent;
  let fixture: ComponentFixture<CochangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CochangesComponent]
    });
    fixture = TestBed.createComponent(CochangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
