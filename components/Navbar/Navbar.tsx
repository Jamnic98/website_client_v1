import { type FC, useState } from 'react'
import { MobileMenuToggle, Navlink, NavLogo } from '..'
import { type NavlinkData } from '../../types/global'
import classNames from 'classnames'
import styles from './Navbar.module.css'

export interface NavbarProps {
  navlinkObjArr: NavlinkData[]
}

export const Navbar: FC<NavbarProps> = ({ navlinkObjArr }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <nav className={styles.navbar} data-testid='navbar' aria-label='navbar'>
      <span className='container'>
        <MobileMenuToggle handleClick={handleClick} isOpen={isOpen} />
        <NavLogo />
        <span
          className={classNames(styles.navlinks, { [styles.open]: isOpen })}
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
