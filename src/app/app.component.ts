import { Component } from '@angular/core';
import {NzResizeEvent} from "ng-zorro-antd/resizable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean;

  constructor() {
    //TODO: save the state of the sidebar in local storage
    this.isCollapsed = false;
  }
}
