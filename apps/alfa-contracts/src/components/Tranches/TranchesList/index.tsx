import React from 'react';
import Spin from 'arui-feather/spin';
import { ITranche } from '../../../models/tranches';
import { useGetTranchesQuery } from '../../../services/api';
import { Typography } from '@alfalab/core-components/typography';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppSelector';
import { setCurrentTranche } from '../../../store/reducers/tranches';

import styles from './index.module.scss';

const TranchesList = () => {
  const filter = useAppSelector((state) => state.tranches.tranchesFilter);
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading } = useGetTranchesQuery(filter);
  const tranches = data || [];

  if (isLoading || isFetching) return <Spin size="s" visible={true} />;

  if (!tranches.length)
    return (
      <Typography.TitleResponsive tag="div" view="xsmall">
        Нет доступных проводок
      </Typography.TitleResponsive>
    );
  return (
    <table className={styles['table']}>
      <thead>
      <tr className={styles['header']}>
        <th className={styles['col']}>ID проводки</th>
        <th className={styles['col']}>Счет КТ</th>
        <th className={styles['col']}>Счет ДТ</th>
        <th className={styles['col']}>Дата</th>
        <th className={styles['col']}>Сумма</th>
        <th className={styles['col']}>Валюта</th>
        <th className={styles['col']}>Комментарий</th>
        <th className={styles['col']}>Отчет Sale Oper List</th>
      </tr>
      </thead>
      <tbody>
      {tranches.map((tranche: ITranche, index: number) => (
        <tr
          key={index}
          onClick={() => dispatch(setCurrentTranche(tranche))}
          className={styles['row']}
        >
          <td className={styles['col']}>{tranche.id}</td>
          <td className={styles['col']}>{tranche.kt}</td>
          <td className={styles['col']}>{tranche.dt}</td>
          <td className={styles['col']}>
            {new Date(tranche.date).toLocaleDateString()}
          </td>
          <td className={styles['col']}>{tranche.amount}</td>
          <td className={styles['col']}>{tranche.currency}</td>
          <td className={styles['col']}>{tranche.comment}</td>
          <td className={styles['col']}>
            <span>Загрузить</span>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default TranchesList;
