import React, { useState } from 'react';
import Navlink from '../Navlink/Navlink';
import NavLogo from '../NavLogo/NavLogo';
import { FaTimes, FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { navlinkObjType } from '../../types/global';
import classNames from 'classnames';

interface NavbarProps {
  navlinkObjArr: navlinkObjType[];
}

const Navbar: React.FC<NavbarProps> = ({ navlinkObjArr }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar} id='navbar' aria-label='navbar'>
      <span className='container'>
        <span className='logoContainer'>
          <NavLogo handleClick={() => setIsMenuOpen(false)} />
        </span>
        <span
          className={classNames(styles.navlinks, { [styles.open]: isMenuOpen })}
          aria-label='navlinks'
        >
          {navlinkObjArr.map((navlinkObj, index) => (
            <Navlink
              onClick={() => setIsMenuOpen(false)}
              navlinkObj={navlinkObj}
              key={index}
            />
          ))}
        </span>
        <MobileMenuToggle
          handleClick={() => handleMenuToggle()}
          isOpen={isMenuOpen}
        />
      </span>
    </nav>
  );
};

export default Navbar;

interface MobileMenuToggleProps {
  handleClick: Function;
  isOpen: boolean;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  handleClick,
  isOpen,
}) => (
  <span
    onClick={() => handleClick()}
    className={styles.menuIcon}
    aria-label='mobile menu toggle button'
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </span>
);
