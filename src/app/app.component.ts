import { Component } from '@angular/core';
import {NzResizeEvent} from "ng-zorro-antd/resizable";
import {XMLClassModel} from "./models/compound";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean;
  selectedXMLClass: XMLClassModel | undefined;

  constructor() {
    //TODO: save the state of the sidebar in local storage
    this.isCollapsed = false;
  }

  onClassClicked(event: XMLClassModel) {
      this.selectedXMLClass = event;
  }
}
