export interface IFilter extends IObjectKeys {
  merchant?: string;
  autlet?: string;
  terminal?: string;
  eqid?: string;
  name?: string;
}

export interface IFilterELem {
  name: string;
  value: string;
}

interface IObjectKeys {
  [key: string]: any;
}
