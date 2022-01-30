import React from 'react';
import styles from './Caret.module.css';

interface Props {
  isUp: boolean;
}

export default function Caret({ isUp }: Props) {
  return (
    <span
      className={`${styles.caret} ${isUp ? `${styles.flip}` : ''}`}
      data-testid='caret'
    >
      &#94;
    </span>
  );
}
