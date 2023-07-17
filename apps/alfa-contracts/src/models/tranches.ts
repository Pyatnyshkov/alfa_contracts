export interface ITranche extends IObjectKeys {
  id: number;
  kt: number;
  dt: number;
  date: number;
  amount: number;
  currency: number;
  comment: string;
  charge_date: number;
}

interface IObjectKeys {
  [key: string]: any;
}
