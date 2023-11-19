import React from 'react'

import styles from './pageHeader.module.css'

interface PageHeaderProps {
	title: string
	description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	description,
}) => (
	<header className={styles.header} data-testid="application-pageHeader">
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.description}>{description}</p>
		<hr className={styles.hr} />
	</header>
)
