import React from 'react';
import Spin from 'arui-feather/spin';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { IContract } from '../../../models/contracts';
import { useGetContractsQuery } from '../../../services/contracts';
import { Typography } from '@alfalab/core-components/typography';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrentContract } from '../../../store/reducers/app';

import styles from './index.module.scss';

const ContractsList = () => {
  const filter = useAppSelector((state) => state.app.filter);
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
    <div className={styles['table']}>
      <GridRow className={styles['header']}>
        <GridCol className={styles['col']}>Дата договора</GridCol>
        <GridCol className={styles['col']}>Номер договора</GridCol>
        <GridCol className={styles['col']}>Название компании</GridCol>
        <GridCol className={styles['col']}>Банковские реквизиты</GridCol>
        <GridCol className={styles['col']}>Инн</GridCol>
      </GridRow>
      {contracts.map((contract: IContract, index: number) => (
        <div
          key={index}
          onClick={() => dispatch(setCurrentContract(contract))}
          className={styles['row']}
        >
          <GridRow>
            <GridCol className={styles['col']}>
              {new Date(contract.date).toLocaleDateString()}
            </GridCol>
            <GridCol className={styles['col']}>{contract.number}</GridCol>
            <GridCol className={styles['col']}>{contract.company_name}</GridCol>
            <GridCol className={styles['col']}>{contract.bank_details}</GridCol>
            <GridCol className={styles['col']}>{contract.inn}</GridCol>
          </GridRow>
        </div>
      ))}
    </div>
  );
};

export default ContractsList;
