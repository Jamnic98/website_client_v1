import { type FC } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

import styles from './MobileMenuToggle.module.css'

export interface MobileMenuToggleProps {
	handleClick: () => void
	isOpen: boolean
}

export const MobileMenuToggle: FC<MobileMenuToggleProps> = ({
	handleClick,
	isOpen,
}) => (
	<span
		onClick={() => handleClick()}
		className={styles.menuIcon}
		aria-label="mobile menu toggle button"
	>
		{isOpen ? <FaTimes /> : <FaBars />}
	</span>
)
