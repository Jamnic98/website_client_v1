import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { MobileMenuToggle, Navlink, NavLogo } from '..'
import { type NavlinkData } from '../../types/global'
import { FaTimes, FaBars } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
  navlinkObjArr: NavlinkData[]
}

export const Navbar = ({ navlinkObjArr }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <nav className={styles.navbar} data-testid='navbar' aria-label='navbar'>
      <span className='container'>
        <MobileMenuToggle handleClick={() => handleClick()} isOpen={isOpen} />
        <NavLogo />
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
      </span>
    </nav>
  )
}
