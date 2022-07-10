import React, { FC } from 'react';
import Link from 'next/link';
import styles from './CustomLink.module.css';

interface CustomLinkProps {
  href: string;
  children: any;
}

const CustomLink: FC<CustomLinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a className={styles.customLink}>{children}</a>
  </Link>
);

export default CustomLink;
