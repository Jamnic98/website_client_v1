import React from 'react';
import styles from './PageHeader.module.css';
import { headerObjType } from '../../types/global';

interface PageHeaderProps {
  headerObj: headerObjType;
}

const PageHeader: React.FC<PageHeaderProps> = ({ headerObj }) => (
  <header className={styles.header} data-testid='header'>
    <h1 className={styles.title}>{headerObj.title}</h1>
    <p className={styles.description}>{headerObj.description}</p>
    <hr className={styles.hr} />
  </header>
);

export default PageHeader;
