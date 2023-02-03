import { type FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './Card.module.css'

export interface CardProps {
  title: string
  description: string
  imageURI: string
  linkURL: string
}

export const Card: FC<CardProps> = ({
  title,
  description,
  imageURI,
  linkURL
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const toggleFocus = () => setIsFocused(!isFocused)

  return (
    <Link href={linkURL || ''} legacyBehavior>
      <a
        onMouseOver={toggleFocus}
        onMouseOut={toggleFocus}
        className={classNames(styles.card, {
          [styles.focused]: isFocused
        })}
        data-testid='application-card'
      >
        <span className={styles.imgContainer}>
          <Image
            src={imageURI}
            alt={title}
            className={styles.img}
            width={140}
            height={140}
          />
        </span>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </a>
    </Link>
  )
}
