import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {XmlParserService} from "../../services/xml/xml-parser.service";
import {XMLClassModel, Compound, Namespace} from "../../models/compound";
import {NamespaceSettingService} from "../../services/settings/namespace-setting.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed: boolean = false;
  @Output() classClicked: EventEmitter<XMLClassModel> = new EventEmitter<XMLClassModel>();

  namespaces: Namespace[] = [];

  constructor(
    private namespaceSettingsService: NamespaceSettingService,
    private xmlParserService: XmlParserService) {}

  ngOnInit() {
    this.xmlParserService.getNamespaces('assets/doxygen/index.xml').subscribe(namespaces => {
      this.namespaces = namespaces;
    });
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  getBaseName(fullyQualifiedNamespaceName: string): string {
    return this.namespaceSettingsService.getBaseName(fullyQualifiedNamespaceName);
  }

  onClassClick(className: XMLClassModel): void {
    console.log('Class clicked: ', className);
    this.classClicked.emit(className);
  }
}
