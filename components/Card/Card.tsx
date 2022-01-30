import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Card.module.css';

interface Props {
  cardObj: {
    title: string;
    description: string;
    imageURI: string;
    URI: string;
  };
}

function Card(props: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const setFocus = () => {
    setIsFocused(!isFocused);
  };

  const { title, description, imageURI, URI } = props.cardObj;
  return (
    <Link href={URI}>
      <a
        onMouseOver={() => setFocus()}
        onMouseOut={() => setFocus()}
        data-testid='card'
        className={`${styles.card} ${isFocused ? `${styles.focused}` : ``}`}
      >
        <span className={styles.imgContainer}>
          <Image
            src={imageURI}
            alt=''
            className={`${styles.img} ${isFocused ? `${styles.focused}` : ``}`}
            layout='fill'
          />
        </span>
        <span
          className={`${styles.textContainer} ${
            isFocused ? `${styles.focused}` : ``
          }`}
          data-testid='textContainer'
        >
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </span>
      </a>
    </Link>
  );
}

export default Card;
