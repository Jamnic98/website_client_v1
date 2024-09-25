import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { PageHeader, ProjectLinks } from 'components'
import projects_data from 'data/projects'
import styles from 'styles/project.module.css'

const IMAGE_DIMENSIONS = { width: 275, height: 275 }

export const dynamicParams = false

interface ProjectGalleryProps {
	screenshotURIs: string[]
}

interface ProjectDescriptionsProps {
	paragraphs: string[]
}

interface ProjectProps {
	params: { id: string }
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshotURIs }) => (
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

const ProjectDescriptions: React.FC<ProjectDescriptionsProps> = ({
	paragraphs,
}) => (
	<>
		{paragraphs.map((paragraph: string, index) => (
			<p key={index}>{paragraph}</p>
		))}
	</>
)

export default async function Page({ params }: ProjectProps) {
	const projectData = await getProject({ id: params.id })

	return (
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
				<Link className={styles.link} href="/projects">
					&larr; projects
				</Link>
			</article>
		</main>
	)
}

const getProject = async (params: { id: string }) =>
	projects_data.filter((project) => project.id === params.id)[0]

export async function generateMetadata({
	params,
}: ProjectProps): Promise<Metadata> {
	const projectData = await getProject({ id: params.id })
	return {
		title: projectData.title,
	}
}

export async function generateStaticParams() {
	return projects_data.map((project) => ({
		id: project.id,
	}))
}
