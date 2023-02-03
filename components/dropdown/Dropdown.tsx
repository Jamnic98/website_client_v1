import { type FC } from 'react'
import classNames from 'classnames'
import styles from './Dropdown.module.css'

export interface DropdownProps {
  items: object[]
  isOpen: boolean
  render: Function
}

export const Dropdown: FC<DropdownProps> = ({ isOpen, render, items }) => (
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
)
