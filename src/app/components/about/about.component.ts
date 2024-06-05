import { Component } from '@angular/core';
import {NamespacesService} from "../../services/compounds/namespaces.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private namespaceService: NamespacesService) {

  }
}
