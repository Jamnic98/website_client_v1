import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { PageHeader } from '../../components'
import projects from '../../data/projects'
import { CgExternal, CgInternal } from 'react-icons/cg'
import type { ProjectData, ProjectLink } from '../../types/global'
import styles from '../../styles/project.module.css'

interface ProjectGalleryProps {
  screenshotURIs: string[]
}

const ProjectGallery: FC<ProjectGalleryProps> = ({ screenshotURIs }) => (
  <>
    {screenshotURIs.map((screenshotURI, index) => (
      <Image
        src={screenshotURI}
        key={index}
        width='350'
        height='350'
        alt='project image'
      />
    ))}
  </>
)

interface ProjectDescriptionsProps {
  descriptionArray: string[]
}

const ProjectDescriptions: FC<ProjectDescriptionsProps> = ({
  descriptionArray
}) => (
  <>
    {descriptionArray.map((paragraph: string, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </>
)

interface ProjectLinksProps {
  links: ProjectLink[]
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <nav className={styles.projectLinks}>
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

interface ProjectProps {
  projectData: ProjectData
}

const Project: FC<ProjectProps> = ({ projectData }) => (
  <>
    <Head>
      <title>{projectData.title}</title>
    </Head>
    <main className='container'>
      <PageHeader
        title={projectData.title}
        description={projectData.shortDescription}
      />
      <article>
        <section>
          <b>Tech stack: </b>
          {projectData.techStack.map((tech: string) => tech).join(', ')}
        </section>
        {projectData.links.length ? (
          <section>
            <ProjectLinks links={projectData.links} />
          </section>
        ) : null}
        <section className={styles.gallery}>
          <ProjectGallery screenshotURIs={projectData.screenshotURIs} />
        </section>
        <section>
          <ProjectDescriptions descriptionArray={projectData.longDescription} />
        </section>
        <Link href='/projects' legacyBehavior>
          <a className={styles.link}>&larr; projects</a>
        </Link>
      </article>
    </main>
  </>
)

export default Project

const getAllProjectIds = () =>
  projects.map((project) => {
    return {
      params: {
        id: project.id
      }
    }
  })

const getProjectData = (id: string) =>
  projects.filter((project) => {
    return project.id === id
  })[0]

export const getStaticProps = ({ params }: any) => {
  return {
    props: {
      projectData: getProjectData(params.id)
    }
  }
}

export const getStaticPaths = () => ({
  paths: getAllProjectIds(),
  fallback: false
})
