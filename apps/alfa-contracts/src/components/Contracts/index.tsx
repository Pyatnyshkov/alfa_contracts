import React  from 'react';
import ItemLayout from './ItemLayout';
import Filter from './Filter';
import ContractsList from './ContractsList';

import styles from './index.module.scss';

const Contracts = () => {
  return (
    <div className={styles['component']}>
      <ItemLayout>
        <Filter />
      </ItemLayout>
      <ItemLayout>
        <ContractsList />
      </ItemLayout>
    </div>
  );
};

export default Contracts;
