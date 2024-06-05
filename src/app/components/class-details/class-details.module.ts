import { NgModule } from '@angular/core';
import {ClassDetailsComponent} from "./class-details.component";
import {ClassDetailsRoutingModule} from "./class-details-routing.module";
import {NzPageHeaderComponent, NzPageHeaderContentDirective} from "ng-zorro-antd/page-header";
import {NgIf} from "@angular/common";


@NgModule({
  imports: [ClassDetailsRoutingModule, NzPageHeaderComponent, NzPageHeaderContentDirective, NgIf],
  declarations: [ClassDetailsComponent],
  exports: [ClassDetailsComponent]
})
export class ClassDetailsModule { }
