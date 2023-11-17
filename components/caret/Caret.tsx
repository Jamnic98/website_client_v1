import classNames from 'classnames'

import styles from './Caret.module.css'

export enum CaretDirection {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

export interface CaretProps {
	direction?: CaretDirection
	isFlipped?: boolean
}

export const Caret: React.FC<CaretProps> = ({
	direction = CaretDirection.up,
	isFlipped = false,
}: CaretProps) => (
	<span
		className={classNames(styles.caret, styles[direction], {
			[styles.flip]: isFlipped,
		})}
	>
		^
	</span>
)
