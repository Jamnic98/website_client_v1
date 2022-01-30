import { useState } from 'react';
import Link from 'next/link';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Navlink.module.css';
import useWidth from '../useWidth';
import Caret from '../Caret/Caret';
import { navlinkObjType } from '../../types/global';

interface Props {
  navlinkObj: navlinkObjType;
  onClick: Function;
}

function Navlink({ navlinkObj, onClick }: Props) {
  const { label, url, children } = navlinkObj;
  const [active, setActive] = useState(false);

  const screenWidth = useWidth() || 800;
  return (
    <>
      {screenWidth >= 800 && children.length > 0 ? (
        <div className={styles.dropdownNavlink}>
          <Link href={url}>
            <a
              className={styles.navlink}
              onClick={() => onClick()}
              onMouseOver={() => setActive(true)}
              onMouseOut={() => setActive(false)}
            >
              {label}
              <Caret isUp={active} />
            </a>
          </Link>
          <div
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
            className={styles.dropdownContainer}
            data-testid='dropdownContainer'
          >
            <Dropdown
              isOpen={active}
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
          <a onClick={() => onClick()} className={styles.navlink}>
            {label}
          </a>
        </Link>
      )}
    </>
  );
}

export default Navlink;
