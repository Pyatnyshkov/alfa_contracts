import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import axios from 'axios';

import { urls } from '../utils/urls';
import { IContract } from '../models/contracts';
import { ITranche } from '../models/tranches';
import {
  IContractsFilter,
  ITranchesFilter,
  ITransactionsFilter,
} from '../models/filter';

import contracts from './contracts.json';
import tranches from './tranches.json';
import transactions from './transactions.json';
import { ITransaction } from '../models/transactions';

const baseQuery =
  (): BaseQueryFn<{
    url: string;
  }> =>
  async ({ url }) => {
    try {
      const response = await axios.post(url);
      const result = response.data;
      return { data: result.contracts };
    } catch (axiosError) {
      switch (url) {
        case urls.contracts:
          return { data: contracts };
        case urls.tranches:
          return { data: tranches };
        case urls.transactions:
          return { data: transactions };
        default:
          return { data: contracts };
      }
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery(),
  endpoints: (build) => ({
    getContracts: build.query<IContract[], IContractsFilter>({
      query: () => ({
        url: urls.contracts,
      }),
    }),
    getTranches: build.query<ITranche[], ITranchesFilter>({
      query: () => ({
        url: urls.tranches,
      }),
    }),
    getTransactions: build.query<ITransaction[], ITransactionsFilter>({
      query: () => ({
        url: urls.transactions,
      }),
    }),
  }),
});

export const {
  useGetContractsQuery,
  useGetTranchesQuery,
  useGetTransactionsQuery,
} = api;