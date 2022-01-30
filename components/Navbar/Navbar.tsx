import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Navlink from '../Navlink/Navlink';
import { navlinkObjType } from '../../types/global';
import { FaTimes, FaBars } from 'react-icons/fa';
import Link from 'next/link';

interface Props {
  navlinkObjArr: navlinkObjType[];
}

function Navbar({ navlinkObjArr }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar} data-testid='navbar' aria-label='navbar'>
      <span className='container'>
        <span className={styles.logoContainer}>
          <Link href='/'>
            <a
              onClick={() => setIsOpen(false)}
              className={styles.logo}
              aria-label='home button'
            >
              Jamie Stimpson
            </a>
          </Link>
        </span>
        <span
          className={`${styles.navlinks} ${isOpen ? `${styles.open}` : ''}`}
          aria-label='navlinks'
        >
          {navlinkObjArr.map((navlinkObj, index) => (
            <Navlink
              onClick={() => setIsOpen(false)}
              navlinkObj={navlinkObj}
              key={index}
            />
          ))}
        </span>
        <span
          onClick={() => handleClick()}
          className={`${styles.menuIcon} ${isOpen ? `${styles.open}` : ''}`}
          aria-label='toggle mobile menu'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </span>
      </span>
    </nav>
  );
}

export default Navbar;
