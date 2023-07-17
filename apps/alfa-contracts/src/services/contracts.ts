import { createApi } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import axios, { AxiosError } from 'axios';

import { url } from '../utils/urls';
import { IContract } from '../models/contracts';

import contracts from './contracts.json';

const contractsBaseQuery =
  (): BaseQueryFn<{
    url: string;
  }> =>
  async ({ url }) => {
    try {
      const response = await axios.post(url);
      const result = await response.data;
      if (result.error) {
        return { data: contracts };
      }
      return { data: result.contracts };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      console.log(err);
      return { data: contracts };
    }
  };

export const contractsApi = createApi({
  reducerPath: 'contractsApi',
  baseQuery: contractsBaseQuery(),
  endpoints: (build) => ({
    getContracts: build.query<IContract[], null>({
      query: () => ({
        url: url.contracts,
      }),
    }),
  }),
});

export const { useGetContractsQuery } = contractsApi;
