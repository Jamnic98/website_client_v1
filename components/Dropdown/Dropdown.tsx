import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

interface DropdownItemProps {
  children: any;
}

const DropdownItem: FC<DropdownItemProps> = ({ children }) => (
  <div className={styles.dropdownItem}>{children}</div>
);

interface DropdownProps {
  isOpen: boolean;
  render: Function;
  items: object[];
}

const Dropdown: FC<DropdownProps> = ({ isOpen, render, items }) => (
  <div
    className={classNames(
      styles.dropdown,
      isOpen ? styles.open : styles.closed
    )}
    data-testid='dropdown'
  >
    {items.map((item, index) => {
      return <DropdownItem key={index}>{render(item)}</DropdownItem>;
    })}
  </div>
);

export default Dropdown;
