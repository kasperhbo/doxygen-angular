import {Injectable} from '@angular/core';
import {Class, Compound, DoxygenIndex, Namespace} from "../../models/compound";
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Parser, parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class XmlParserService {
  constructor(private http: HttpClient) {
  }

  getNamespaces(url: string): Observable<Namespace[]> {
    return this.getXML(url).pipe(map((compounds: Compound[]) => {
        const filtered = compounds.filter(compound => compound.$.kind === 'namespace');
        let namespaces = filtered.map(compound => {
          // let namespaceName = compound.name.substring(compound.name.lastIndexOf('::'));
          return new Namespace(
            compound.$.refid,
            compound.$.kind,
            compound.name
          );
        });
        let classes = compounds.filter(compound => compound.$.kind === 'class');

        namespaces.forEach(namespace => {
          let filteredClasses = classes.filter(
            compound => {
              let namespaceIndex = compound.name.lastIndexOf('::');
              if (namespaceIndex === -1) {
                return false;
              }
              let namespaceName = compound.name.substring(0, namespaceIndex);
              return namespaceName === namespace.name;
            });
          namespace.classes = filteredClasses.map(compound => {
            return new Class(
              compound.$.refid,
              compound.$.kind,
              compound.name.substring(compound.name.lastIndexOf('::') + 2),
            );
          });
        });

        return namespaces;
      })
    );
  }


  private getXML(url: string): Observable<Compound[]> {
    return this.http.get(url, {responseType: 'text'}).pipe(
      switchMap((response: string) => from(this.parseXml(response)))
    );
  }

  private parseXml(xml: string): Promise<Compound[]> {
    return new Promise((resolve, reject) => {
      parseString(xml, {explicitArray: false}, (err, result) => {
        if (err) {
          reject('Error parsing XML');
        } else {
          console.log('result', result);
          return resolve(result.doxygenindex.compound as Compound[]);
        }
      });
    });
  }
}
