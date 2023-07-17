import React from 'react';
import styles from './index.module.scss';

interface ItemLayoutProps {
  children: React.ReactNode;
}

const ItemLayout = ({children}: ItemLayoutProps) => (
  <div className={styles['item']}>
    {children}
  </div>
);

export default ItemLayout;
