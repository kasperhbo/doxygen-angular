export interface DoxygenIndex {
  doxygenindex: {
    compound: Compound[];
  };
}

export class XMLClassModel {
  refid: string;
  kind: string;
  name: string;
  member?: Member[];

  constructor(refid: string,
              kind: string,
              name: string,
              member?: Member[],
  ) {
    this.refid = refid;
    this.kind = kind;
    this.name = name;
    this.member = member;
  }
}

export class Namespace{
  refid: string;
  kind: string;
  name: string;
  member?: Member[];
  classes?: XMLClassModel[];

  constructor(refid: string, kind: string, name: string,
              classes?: XMLClassModel[],
              member?: Member[]) {
    this.refid = refid;
    this.kind = kind;
    this.name = name;
    this.classes = classes;
    this.member = member;
  }
}

export interface Compound {
  $: {
    refid: string;
    kind: string;
  };
  name: string;
  member?: Member[];
}

export interface Member {
  $: {
    refid: string;
    kind: string;
  };
  name: string;
}

