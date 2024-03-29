import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponentComponent } from './autocomplete-component.component';

describe('AutocompleteComponentComponent', () => {
  let component: AutocompleteComponentComponent;
  let fixture: ComponentFixture<AutocompleteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteComponentComponent]
    });
    fixture = TestBed.createComponent(AutocompleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
