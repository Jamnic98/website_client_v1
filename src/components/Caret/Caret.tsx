import classNames from 'classnames'

import styles from './caret.module.css'

export enum CaretDirection {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface CaretProps {
  direction?: CaretDirection
  isFlipped?: boolean
}

export const Caret: React.FC<CaretProps> = ({
  direction = CaretDirection.UP,
  isFlipped = false,
}: CaretProps) => (
  <div
    className={classNames(styles.caret, styles[direction], {
      [styles.flip]: isFlipped,
    })}
  >
    ^
  </div>
)
