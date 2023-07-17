import React from 'react';
import Spin from 'arui-feather/spin';
import { IContract } from '../../../models/contracts';
import { useGetContractsQuery } from '../../../services/api';
import { Typography } from '@alfalab/core-components/typography';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrentContract } from '../../../store/reducers/app';

import styles from './index.module.scss';

const ContractsList = () => {
  const filter = useAppSelector((state) => state.app.contractsFilter);
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading } = useGetContractsQuery(filter);
  const contracts = data || [];

  if (isLoading || isFetching) return <Spin size="s" visible={true} />;

  if (!contracts.length)
    return (
      <Typography.TitleResponsive tag="div" view="xsmall">
        Нет доступных договоров
      </Typography.TitleResponsive>
    );
  return (
    <table className={styles['table']}>
      <thead>
        <tr className={styles['header']}>
          <th className={styles['col']}>Дата договора</th>
          <th className={styles['col']}>Номер договора</th>
          <th className={styles['col']}>Название компании</th>
          <th className={styles['col']}>Банковские реквизиты</th>
          <th className={styles['col']}>Инн</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract: IContract, index: number) => (
          <tr
            key={index}
            onClick={() => dispatch(setCurrentContract(contract))}
            className={styles['row']}
          >
            <td className={styles['col']}>
              {new Date(contract.date).toLocaleDateString()}
            </td>
            <td className={styles['col']}>{contract.number}</td>
            <td className={styles['col']}>{contract.company_name}</td>
            <td className={styles['col']}>{contract.bank_details}</td>
            <td className={styles['col']}>{contract.inn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractsList;
