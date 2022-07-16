import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Card.module.css';

type CardObjType = {
  title: string;
  description: string;
  imageURI: string;
  linkURL: string;
};

interface CardProps {
  cardObj: CardObjType;
}

const Card: React.FC<CardProps> = ({ cardObj }) => {
  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => setIsFocused(!isFocused);

  const { title, description, imageURI, linkURL } = cardObj;
  return (
    <Link href={linkURL}>
      <a
        onMouseOver={() => toggleFocus()}
        onMouseOut={() => toggleFocus()}
        className={classNames(styles.card, {
          [styles.focused]: isFocused,
        })}
        data-testid='card'
      >
        <span className={styles.imgContainer}>
          <Image
            src={imageURI}
            alt={title}
            className={styles.img}
            layout='fill'
          />
        </span>
        <span className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <span className={styles.description}>{description}</span>
        </span>
      </a>
    </Link>
  );
};

export default Card;
