import React from 'react';
import Link from 'next/link';
import styles from './NavLogo.module.css';

interface NavLogoProps {
  handleClick?: Function;
  linkURL?: string;
}

const NavLogo: React.FC<NavLogoProps> = ({ handleClick, linkURL = '/' }) => (
  <Link href={linkURL}>
    <a
      className={styles.navLogo}
      onClick={handleClick ? () => handleClick() : undefined}
    >
      Jamie Stimpson
    </a>
  </Link>
);

export default NavLogo;
