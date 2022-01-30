import styles from './Dropdown.module.css';

interface Props {
  isOpen: boolean;
  render: Function;
  items: object[];
}

function DropdownItem({ children }: any) {
  return <div className={styles.dropdownItem}>{children}</div>;
}

function Dropdown({ isOpen, render, items }: Props) {
  return (
    <div
      className={`${styles.dropdown} ${
        isOpen ? `${styles.open}` : `${styles.closed}`
      }`}
      data-testid='dropdown'
    >
      {items.map((item, index) => {
        return <DropdownItem key={index}>{render(item)}</DropdownItem>;
      })}
    </div>
  );
}

export default Dropdown;
