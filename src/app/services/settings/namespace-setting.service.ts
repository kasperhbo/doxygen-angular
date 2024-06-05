import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamespaceSettingService {
  basename: string = "nl::hellebrekers::benandjerrys::";

  //todo: Get this from a database / settings file
  constructor() {
  }

  getBaseName(fullyQualifiedNamespaceName: string): string{
    return fullyQualifiedNamespaceName.substring(this.basename.length, fullyQualifiedNamespaceName.length);
  }
}
