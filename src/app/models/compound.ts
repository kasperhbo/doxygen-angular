import {NamespaceSettingService} from "../services/settings/namespace-setting.service";

export interface NamespaceItem {
  $: {
    refid: string;
    kind: string;
  };
  name: string;
}

export class NamespaceTree {
  name: string;
  children: NamespaceTree[];

  constructor(name: string, children: NamespaceTree[] = []) {
    this.name = name;
    this.children = [];
  }
}

export interface DoxygenIndex {
  doxygenindex: {
    compound: Compound[];
  };
}

export class Class {
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
  classes?: Class[];

  constructor(refid: string, kind: string, name: string,
              classes?: Class[],
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

