import React from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

interface DropdownProps {
  items: object[];
  isOpen: boolean;
  render: Function;
}
const Dropdown: React.FC<DropdownProps> = ({ isOpen, render, items }) => (
  <div
    className={classNames(
      styles.dropdown,
      isOpen ? styles.open : styles.closed
    )}
    data-testid='dropdown'
  >
    {items.map((item, index) => (
      <div key={index} className={styles.dropdownItem}>
        {render(item)}
      </div>
    ))}
  </div>
);

export default Dropdown;
