import {FC} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import {PageHeader, ProjectLinks} from '../../components'
import projects from '../../data/projects'
import type {ProjectDataType} from '../../types'
import styles from 'styles/project.module.css'

const IMAGE_DIMENSIONS = {width: 275, height: 275}

interface ProjectGalleryProps {
	screenshotURIs: string[]
}

const ProjectGallery: FC<ProjectGalleryProps> = ({screenshotURIs}) => (
	<>
		{screenshotURIs.map((screenshotURI, index) => (
			<Image
				src={screenshotURI}
				key={index}
				alt="project image"
				width={IMAGE_DIMENSIONS.width}
				height={IMAGE_DIMENSIONS.height}
			/>
		))}
	</>
)

interface ProjectDescriptionsProps {
	paragraphs: string[]
}

const ProjectDescriptions: FC<ProjectDescriptionsProps> = ({paragraphs}) => (
	<>
		{paragraphs.map((paragraph: string, index) => (
			<p key={index}>{paragraph}</p>
		))}
	</>
)

interface ProjectProps {
	projectData: ProjectDataType
}

const Project: FC<ProjectProps> = ({projectData}) => (
	<>
		<Head>
			<title>{projectData.title}</title>
		</Head>
		<main className="container">
			<PageHeader title={projectData.title} description={projectData.summary} />
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
					<ProjectDescriptions paragraphs={projectData.paragraphs} />
				</section>
				<Link href="/projects" legacyBehavior>
					<a className={styles.link}>&larr; projects</a>
				</Link>
			</article>
		</main>
	</>
)

export default Project

export const getStaticProps = ({params}: {params: {id: string}}) => {
	return {
		props: {
			projectData: projects.filter((project) => project.id === params.id)[0],
		},
	}
}

export const getStaticPaths = () => {
	const getAllProjectIds = () =>
		projects.map(({id}) => {
			return {
				params: {
					id,
				},
			}
		})

	return {
		paths: getAllProjectIds(),
		fallback: false,
	}
}
