import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { PageHeader, ProjectLinks } from '../../components'
import type { ProjectData, ProjectLinkData } from '../../types/global'
import projects from '../../data/projects'
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
        alt='project image'
        width={275}
        height={275}
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
