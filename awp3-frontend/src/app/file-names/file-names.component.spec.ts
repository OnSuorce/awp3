import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNamesComponent } from './file-names.component';

describe('FileNamesComponent', () => {
  let component: FileNamesComponent;
  let fixture: ComponentFixture<FileNamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileNamesComponent]
    });
    fixture = TestBed.createComponent(FileNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
