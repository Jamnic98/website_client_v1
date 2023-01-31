import { type FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './Card.module.css'

export interface CardProps {
  title: string
  description: string
  imageUri: string
  linkUrl: string
}

export const Card: FC<CardProps> = ({
  title,
  description,
  imageUri,
  linkUrl
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const toggleFocus = () => setIsFocused(!isFocused)

  return linkUrl ? (
    <Link href={linkUrl} legacyBehavior>
      <a
        onMouseOver={toggleFocus}
        onMouseOut={toggleFocus}
        className={classNames(styles.card, {
          [styles.focused]: isFocused
        })}
        data-testid='card'
      >
        <span className={styles.imgContainer}>
          {imageUri && (
            <Image
              src={imageUri}
              alt={title}
              className={styles.img}
              layout='fill'
            />
          )}
        </span>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </a>
    </Link>
  ) : null
}
