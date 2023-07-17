import React from 'react';
import Link from 'arui-feather/link';
import styles from './header.module.scss';
import { Typography } from '@alfalab/core-components/typography';

const Header = () => {
  return (
    <div className={styles['component']}>
      <div className={styles['label']}>
        <div className={styles['logo']}/>
        <Typography.TitleResponsive tag="div" view="small">
          Альфа-Банк. Система расчетов
        </Typography.TitleResponsive>
      </div>
      <div className={styles['auth']}>
        <div className={styles['control']}>
          <Link>u_s0101</Link>
          <span className={styles['separator']}>|</span>
          <Link>Выход</Link>
        </div>
        <Typography.TitleResponsive tag="div" view="xsmall">
          Роль пользователя: Администратор
        </Typography.TitleResponsive>
      </div>
    </div>
  );
};

export default Header;
