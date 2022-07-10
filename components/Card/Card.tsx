import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Card.module.css';

interface CardProps {
  cardObj: {
    title: string;
    description: string;
    imageURI: string;
    URI: string;
  };
}

const Card: FC<CardProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  const { title, description, imageURI, URI } = props.cardObj;
  return (
    <Link href={URI} >
      <a
        onMouseOver={() => toggleFocus()}
        onMouseOut={() => toggleFocus()}
        className={styles.card}
        data-testid='card'
      >
        <span className={styles.imgContainer}>
          <Image
            src={imageURI}
            alt={title}
            className={classNames(styles.img, {
              [styles.focused]: isFocused,
            })}
            layout='fill'
          />
        </span>
        <span className={styles.textContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </span>
      </a>
    </Link>
  );
};

export default Card;
