import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CochangesComponent} from "./cochanges/cochanges.component";
import {SingleFileCochangesComponent} from "./single-file-cochanges/single-file-cochanges.component";
import {PairCochangesComponent} from "./pair-cochanges/pair-cochanges.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cochanges', component: CochangesComponent },
  { path: 'single-file-cochanges', component: SingleFileCochangesComponent },
  { path: 'pair-cochanges', component: PairCochangesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
