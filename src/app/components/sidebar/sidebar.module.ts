import {NgModule} from '@angular/core';

import {SidbarRoutingModule} from './sidbar-routing.module';

import {SidebarComponent} from './sidebar.component';
import {NzSiderComponent} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {NamespacesService} from "../../services/compounds/namespaces.service";
import {XmlParserService} from "../../services/xml/xml-parser.service";
import {NamespaceSettingService} from "../../services/settings/namespace-setting.service";


@NgModule(
  {
    declarations: [
      SidebarComponent
    ],
    imports: [
      SidbarRoutingModule,
      NzSiderComponent,
      NzMenuDirective,
      NzMenuItemComponent,
      NzSubMenuComponent,
      NgOptimizedImage,
      NgForOf,
      NgIf
    ],
    exports: [
      SidebarComponent
    ],
    providers: [
      NamespacesService,
      XmlParserService,
      NamespaceSettingService
    ]
  }
)
export class SidebarModule {
  constructor() {

  }
}
