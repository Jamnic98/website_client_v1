import React from 'react'
import Link from 'next/link'

import { useWidth } from 'utils'
import styles from './navLogo.module.css'

export interface NavLogoProps {
	handleClick?: () => void
	linkURL?: string
}

export const NavLogo: React.FC<NavLogoProps> = ({
	handleClick,
	linkURL = '/',
}) => {
	const width = useWidth()
	return (
		<Link
			className={styles.navLogo}
			href={linkURL}
			onClick={handleClick ? () => handleClick() : undefined}
		>
			{width ? (width < 800 ? 'JS' : 'Jamie Stimpson') : null}
		</Link>
	)
}
