import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Caret.module.css';

interface CaretProps {
  isUp: boolean;
}

const Caret: FC<CaretProps> = ({ isUp }) => (
  <span
    className={classNames(styles.caret, {
      [styles.flip]: isUp,
    })}
    data-testid='caret'
  >
    &#94;
  </span>
);

export default Caret;
