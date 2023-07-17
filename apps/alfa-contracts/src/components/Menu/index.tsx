import React from 'react';
import Menu from 'arui-feather/menu';
import * as MenuItems from './MenuItems';
import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector';
import { setNavigation } from '../../store/reducers/app';

const WindowMenu = () => {
  const menu = useAppSelector((state) => state.app.navigation);
  const dispatch = useAppDispatch();
  const MENU = [
    {
      content: <MenuItems.Contracts />,
      value: 'contracts',
    },
    {
      content: <MenuItems.Tranches />,
      value: 'tranches',
    },
    {
      content: <MenuItems.Transactions />,
      value: 'transactions',
    },
    {
      content: <MenuItems.Reports />,
      value: 'reports',
      props: {
        disabled: true
      }
    },
  ];

  return (
    <Menu
      checkedItems={[menu]}
      onItemClick={({ value }) => dispatch(setNavigation(value))}
      mode="radio-check"
      content={MENU}
      className={styles['menu']}
    />
  );
};

export default WindowMenu;
