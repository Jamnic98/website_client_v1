import { type FC } from 'react'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  description?: string
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => (
  <header className={styles.header} data-testid='application-page-header' >
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
    <hr className={styles.hr} />
  </header>
)
