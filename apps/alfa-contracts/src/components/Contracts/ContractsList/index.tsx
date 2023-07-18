import React, { useEffect, useState } from 'react';
import Spin from 'arui-feather/spin';
import { ArrowUpDownHeavyMIcon } from '@alfalab/icons-glyph/ArrowUpDownHeavyMIcon';
import { IContract } from '../../../models/contracts';
import { useGetContractsQuery } from '../../../services/api';
import { Typography } from '@alfalab/core-components/typography';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrentContract } from '../../../store/reducers/contracts';

import styles from './index.module.scss';

const ContractsList = () => {
  const filter = useAppSelector((state) => state.contracts.contractsFilter);
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading } = useGetContractsQuery(filter);
  const [contracts, setContracts] = useState<IContract[]>([]);
  const [order, setOrder] = useState<boolean>(false);

  useEffect(() => setContracts(data || []), [data]);

  const sortNumbers = (data: string) => {
    setOrder(!order);
    const sorted = [...contracts].sort((contract: IContract, next: IContract) =>
      order ? contract[data] - next[data] : next[data] - contract[data]
    );
    setContracts(sorted);
  };

  const sortStrings = (data: string) => {
    setOrder(!order);
    const sorted = [...contracts].sort((contract: IContract, next: IContract) =>
      order
        ? ('' + contract[data]).localeCompare(next[data])
        : ('' + next[data]).localeCompare(contract[data])
    );
    setContracts(sorted);
  };

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
          <th className={styles['col']}>
            <div className={styles['cell']}>
              Дата договора{' '}
              <ArrowUpDownHeavyMIcon
                className={styles['sort']}
                onClick={() => sortNumbers('date')}
              />
            </div>
          </th>
          <th className={styles['col']}>
            <div className={styles['cell']}>
              Номер договора{' '}
              <ArrowUpDownHeavyMIcon
                className={styles['sort']}
                onClick={() => sortStrings('number')}
              />
            </div>
          </th>
          <th className={styles['col']}>
            <div className={styles['cell']}>
              Название компании{' '}
              <ArrowUpDownHeavyMIcon
                className={styles['sort']}
                onClick={() => sortStrings('company_name')}
              />
            </div>
          </th>
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
