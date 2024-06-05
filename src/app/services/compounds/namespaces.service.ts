import { Injectable } from '@angular/core';
import {XmlParserService} from "../xml/xml-parser.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NamespacesService {

  constructor(private xmlParser: XmlParserService) {

  }


  //todo:remeimplement

  // private buildNamespaceTree_v2(namespaceItems: NamespaceItem[]): NamespaceTree[] {
  //   const tree: NamespaceTree[] = [];
  //
  //   namespaceItems.forEach(item => {
  //     const parts = item.name.split('::');
  //     this.addNamespace(tree, parts);
  //   });
  //
  //   return tree;
  // }
  //
  // private addNamespace(tree: NamespaceTree[], parts: string[]): void {
  //   if (parts.length === 0) return;
  //
  //   let part: string = parts.shift() as string;
  //   let node = tree.find(t => t.name === part);
  //
  //   if (!node) {
  //     node = new NamespaceTree(part);
  //     tree.push(node);
  //   }
  //
  //   this.addNamespace(node.children, parts);
  // }
}
