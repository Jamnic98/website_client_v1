import {type FC} from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { CgExternal, CgInternal } from 'react-icons/cg'
import { ProjectLinkData } from '../../../types/global'
import styles from './ProjectLinks.module.css'

export interface ProjectLinksProps {
  links: ProjectLinkData[]
}

export const ProjectLinks: FC<ProjectLinksProps> = ({ links }) => (
  <nav /* className={styles.projectLinks} */>
    {links.map((link, index) => {
      if (link.type === 'external') {
        return (
          <a
            className={classNames(styles.projectLink, styles.link)}
            href={link.URL}
            target='_blank'
            rel='noreferrer'
            key={index}
          >
            {link.label} <CgExternal />
          </a>
        )
      } else if (link.type === 'internal') {
        return (
          <Link href={link.URL} key={index}>
            <a className={classNames(styles.projectLink, styles.link)}>
              {link.label} <CgInternal />
            </a>
          </Link>
        )
      }
    })}
  </nav>
)
