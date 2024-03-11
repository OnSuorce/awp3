import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from '../services/api.service'; // Aggiorna il percorso in base alla tua struttura

@Component({
  selector: 'app-autocomplete-component',
  templateUrl: './autocomplete-component.component.html',
  styleUrls: ['./autocomplete-component.component.css']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getFileNames().subscribe((data: string[]) => {
      this.options = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSelectionChanged(event: any) {
    this.optionSelected.emit(event.option.value);
  }
}
