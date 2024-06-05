import {Component, Input} from '@angular/core';
import {XMLClassModel} from "../../models/compound";

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.scss'
})
export class ClassDetailsComponent {
  @Input() selectedXMLClass: XMLClassModel | undefined = undefined;



  constructor() {

  }


}
