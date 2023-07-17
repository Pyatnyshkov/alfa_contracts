import React from 'react';
import Spin from 'arui-feather/spin';
import { IContract } from '../../../models/contracts';
import { useGetContractsQuery } from '../../../services/contracts';
import { Typography } from '@alfalab/core-components/typography';

const ContractsList = () => {
  const { data, isFetching, isLoading } = useGetContractsQuery(null);
  const contracts = data || [];

  if (isLoading) return <Spin size="s" visible={true} />;
  if (!contracts.length)
    return (
      <Typography.TitleResponsive tag="div" view="xsmall">
        Нет доступных договоров
      </Typography.TitleResponsive>
    );
  return (
    <div>
      {contracts.map((contract: IContract, index: number) => (
        <div>{contract.company_name}</div>
      ))}
    </div>
  );
};

export default ContractsList;
