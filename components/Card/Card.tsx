import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import styles from './card.module.css'

export interface CardProps {
	title: string
	description: string
	imageURI: string
	linkURL: string
}

export const Card: React.FC<CardProps> = ({
	title,
	description,
	imageURI,
	linkURL,
}) => {
	const [isFocused, setIsFocused] = useState(false)
	const toggleFocus = () => setIsFocused(!isFocused)

	return (
		<Link
			className={classNames(styles.card, {
				[styles.focused]: isFocused,
			})}
			href={linkURL}
			onMouseOver={toggleFocus}
			onMouseOut={toggleFocus}
			data-testid="application-card"
		>
			<div className={styles.imgContainer}>
				<Image
					src={imageURI}
					alt={title}
					className={styles.img}
					width={140}
					height={140}
				/>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
			</div>
		</Link>
	)
}
