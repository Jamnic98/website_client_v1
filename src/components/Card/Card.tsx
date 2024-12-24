'use client'
import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import styles from './card.module.css'

export interface CardProps {
  title: string
  description: string
  imageURI: string
}

export const Card: React.FC<CardProps> = ({ title, description, imageURI }) => {
  const [isFocused, setIsFocused] = useState(false)
  const toggleFocus = () => setIsFocused(!isFocused)

  return (
    <div
      onMouseOver={toggleFocus}
      onMouseOut={toggleFocus}
      className={classNames(styles.card, {
        [styles.focused]: isFocused,
      })}
      data-testid={'test-card-id'}
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
    </div>
  )
}
