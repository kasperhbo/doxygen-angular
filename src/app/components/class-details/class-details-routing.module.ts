import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassDetailsComponent} from "./class-details.component";

const routes: Routes = [
  { path: '', component: ClassDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassDetailsRoutingModule { }
