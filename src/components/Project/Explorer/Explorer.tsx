import React from 'react'
import Link from 'next/link'

import { Project } from 'types'
import styles from './explorer.module.css'

interface ExplorerProps {
  title: string
  data: Partial<Project>[]
}

export const Explorer: React.FC<ExplorerProps> = ({ title, data }) => (
  <>
    <h3 style={{ marginBottom: 0 }}>{title}</h3>
    <hr className="subRule" />
    <div>
      {data.map((d, index) => (
        <Link
          className={styles.window}
          href={d.projectPageURI || ''}
          key={index}
        >
          <h4 className={styles.windowTitle}>{d.title}</h4>
          {d.summary}
        </Link>
      ))}
      <div className={styles.allProjectsLink}>
        <Link href="/projects">all projects</Link>
      </div>
    </div>
  </>
)
