export interface IContractsFilter extends IObjectKeys {
  merchant?: string;
  autlet?: string;
  terminal?: string;
  eqid?: string;
  name?: string;
}

export interface ITranchesFilter extends IObjectKeys {
  merchant?: string;
  autlet?: string;
  terminal?: string;
  name?: string;
  from?: Date;
  to?: Date;
  kt?: number;
  dt?: number;
  amount?: number;
}

export interface ITransactionsFilter extends IObjectKeys {
  id?: number;
  card_number?: string;
  tid?: string;
  mid?: string;
  utrno?: number;
  auth_code?: string;
}

export interface IFilterELem {
  name: string;
  value: string;
}

interface IObjectKeys {
  [key: string]: any;
}
