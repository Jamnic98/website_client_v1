import React, { FC, useState } from 'react';
import Link from 'next/link';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Navlink.module.css';
import useWidth from '../../utils/useWidth';
import Caret from '../Caret/Caret';
import { navlinkObjType } from '../../types/global';

interface NavlinkProps {
  navlinkObj: navlinkObjType;
  onClick: Function;
}

const Navlink: FC<NavlinkProps> = ({ navlinkObj, onClick: handleClick }) => {
  const [isActive, setIsActive] = useState(false);
  const { label, url, children } = navlinkObj;
  const screenWidth = useWidth() || 800;
  return (
    <>
      {screenWidth >= 800 && children.length ? (
        <div className={styles.dropdownNavlink}>
          <Link href={url}>
            <a
              className={styles.navlink}
              onClick={() => handleClick()}
              onMouseOver={() => setIsActive(true)}
              onMouseOut={() => setIsActive(false)}
            >
              {label}
              <Caret isUp={isActive} />
            </a>
          </Link>
          <div
            onMouseOver={() => setIsActive(true)}
            onMouseOut={() => setIsActive(false)}
            className={styles.dropdownContainer}
            data-testid='dropdownContainer'
          >
            <Dropdown
              isOpen={isActive}
              items={children}
              render={(item: navlinkObjType) => (
                <Link href={item.url}>
                  <a className={styles.navlink}>{item.label}</a>
                </Link>
              )}
            />
          </div>
        </div>
      ) : (
        <Link href={url}>
          <a onClick={() => handleClick()} className={styles.navlink}>
            {label}
          </a>
        </Link>
      )}
    </>
  );
};

export default Navlink;
