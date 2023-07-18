import React from 'react';
import Spin from 'arui-feather/spin';
import { ITransaction } from '../../../models/transactions';
import { useGetTransactionsQuery } from '../../../services/api';
import { Typography } from '@alfalab/core-components/typography';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrentTransaction } from '../../../store/reducers/transactions';

import styles from './index.module.scss';

const TransactionsList = () => {
  const filter = useAppSelector(
    (state) => state.transactions.transactionsFilter
  );
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading } = useGetTransactionsQuery(filter);
  const transactions = data || [];

  if (isLoading || isFetching) return <Spin size="s" visible={true} />;

  if (!transactions.length)
    return (
      <Typography.TitleResponsive tag="div" view="xsmall">
        Нет доступных транзакций
      </Typography.TitleResponsive>
    );
  return (
    <table className={styles['table']}>
      <thead>
        <tr className={styles['header']}>
          <th className={styles['col']}>Utrnno</th>
          <th className={styles['col']}>Номер карты</th>
          <th className={styles['col']}>Сумма</th>
          <th className={styles['col']}>Валюта</th>
          <th className={styles['col']}>Номер устройства</th>
          <th className={styles['col']}>Тип операции</th>
          <th className={styles['col']}>Дата операции</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction: ITransaction, index: number) => (
          <tr
            key={index}
            onClick={() => dispatch(setCurrentTransaction(transaction))}
            className={styles['row']}
          >
            <td className={styles['col']}>{transaction.utrno}</td>
            <td className={styles['col']}>{transaction.card_number}</td>
            <td className={styles['col']}>{transaction.amount}</td>
            <td className={styles['col']}>{transaction.currency}</td>
            <td className={styles['col']}>{transaction.device_number}</td>
            <td className={styles['col']}>{transaction.operation_type}</td>
            <td className={styles['col']}>
              {new Date(transaction.operation_date).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;
