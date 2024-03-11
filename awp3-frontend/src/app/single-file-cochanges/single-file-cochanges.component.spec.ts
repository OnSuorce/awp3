import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFileCochangesComponent } from './single-file-cochanges.component';

describe('SingleFileCochangesComponent', () => {
  let component: SingleFileCochangesComponent;
  let fixture: ComponentFixture<SingleFileCochangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleFileCochangesComponent]
    });
    fixture = TestBed.createComponent(SingleFileCochangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
