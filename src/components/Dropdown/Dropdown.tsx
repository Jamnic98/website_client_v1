import { type ReactNode } from 'react'
import classNames from 'classnames'

import styles from './dropdown.module.css'

export interface DropdownProps {
  items: object[]
  isOpen: boolean
  render: (item: any) => ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ isOpen, render, items }) => (
  <div
    className={classNames(styles.dropdown, isOpen ? styles.open : styles.closed)}
    data-testid="application-dropdown"
  >
    {items.map((item, index) => (
      <div key={index} className={styles.dropdownItem}>
        {render(item)}
      </div>
    ))}
  </div>
)
