import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileNamesComponent } from './file-names/file-names.component';
import { CochangesComponent } from './cochanges/cochanges.component';
import { SingleFileCochangesComponent } from './single-file-cochanges/single-file-cochanges.component';
import { PairCochangesComponent } from './pair-cochanges/pair-cochanges.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from "@angular/material/list";
import { AutocompleteComponent } from './autocomplete-component/autocomplete-component.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    FileNamesComponent,
    CochangesComponent,
    SingleFileCochangesComponent,
    PairCochangesComponent,
    HomeComponent,
    SidebarComponent,
    AutocompleteComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
