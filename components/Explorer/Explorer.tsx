import { type FC } from 'react'
import Link from 'next/link'
import styles from './Explorer.module.css'

type data = {
  title: string
  description: string
  URI: string
}

interface ExplorerProps {
  title: string
  data: data[]
}

export const Explorer: FC<ExplorerProps> = ({ title, data }) => (
  <>
    <h3>{title}</h3>
    <hr className='subRule' />
    <div>
      {data.map((d, index) => (
        <Link href={d.URI} key={index} legacyBehavior>
          <a className={styles.window}>
            <h3 className={styles.windowTitle}>{d.title}</h3>
            {d.description}
          </a>
        </Link>
      ))}
      <div className={styles.allProjectsLink}>
        <Link href='/projects'>
          <a>all projects</a>
        </Link>
      </div>
    </div>
  </>
)
