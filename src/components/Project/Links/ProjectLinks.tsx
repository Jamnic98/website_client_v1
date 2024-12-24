import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { CgExternal, CgInternal } from 'react-icons/cg'

import { LinkType, ProjectLinkDataType } from 'types'
import styles from './projectLinks.module.css'

export interface ProjectLinksProps {
  links: ProjectLinkDataType[]
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <nav /* className={styles.projectLinks} */>
    {links.map((link, index) => {
      if (link.type === LinkType.EXTERNAL) {
        return (
          <a
            className={classNames(styles.projectLink, styles.link)}
            href={link.URL}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            {link.label} <CgExternal />
          </a>
        )
      } else if (link.type === LinkType.INTERNAL) {
        return (
          <Link
            className={classNames(styles.projectLink, styles.link)}
            href={link.URL}
            key={index}
          >
            {link.label} <CgInternal />
          </Link>
        )
      }
    })}
  </nav>
)
