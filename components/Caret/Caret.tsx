import React from 'react';
import classNames from 'classnames';
import styles from './Caret.module.css';

interface CaretProps {
  isFlipped: boolean;
}

const Caret: React.FC<CaretProps> = ({ isFlipped }) => (
  <span
    className={classNames(styles.caret, {
      [styles.flip]: isFlipped,
    })}
  >
    &#94;
  </span>
);

export default Caret;
