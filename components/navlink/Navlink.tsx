import { type FC, useState } from 'react'
import Link from 'next/link'
import { Caret, Dropdown } from '..'
import { type NavlinkData } from '../../types/global'
import useWidth from '../../utils/useWidth'
import styles from './Navlink.module.css'

interface NavlinkProps {
  navlinkObj: NavlinkData
  onClick: Function
}

export const Navlink: FC<NavlinkProps> = ({
  navlinkObj,
  onClick: handleClick
}) => {
  const [isActive, setIsActive] = useState(false)
  const { label, url, children } = navlinkObj
  const screenWidth = useWidth() || 800
  return (
    <>
      {screenWidth >= 800 && children.length ? (
        <div
          className={styles.dropdownNavlink}
          onMouseOver={() => setIsActive(true)}
          onMouseOut={() => setIsActive(false)}
          onClick={() => handleClick()}
        >
          <Link href={url} legacyBehavior>
            <a className={styles.navlink}>
              {label}
              <Caret isFlipped={isActive} />
            </a>
          </Link>
          <div
            className={styles.dropdownContainer}
            data-testid='dropdownContainer'
          >
            <Dropdown
              isOpen={isActive}
              items={children}
              render={(navlinkObj: NavlinkData) => (
                <Link href={navlinkObj.url} legacyBehavior>
                  <a className={styles.navlink}>{navlinkObj.label}</a>
                </Link>
              )}
            />
          </div>
        </div>
      ) : (
        <Link href={url} legacyBehavior>
          <a onClick={() => handleClick()} className={styles.navlink}>
            {label}
          </a>
        </Link>
      )}
    </>
  )
}
