import { useState } from 'react'
import Head from 'next/head'

import { Card, PageHeader } from '../components'
import projects from '../data/projects'
import type { ProjectDataType } from '../types'
import styles from 'styles/projects.module.css'

const languages = [
	'',
	...Array.from(
		new Set(
			projects.map((projectData: ProjectDataType) => projectData.mainLanguage)
		)
	),
]

const Projects = () => {
	const [language, setLanguage] = useState('')

	const setProjects = () => {
		return projects
			.filter(
				(projectData: ProjectDataType) =>
					language === '' || projectData.mainLanguage === language
			)
			.map((projectData: ProjectDataType) => (
				<Card
					title={projectData.title}
					description={projectData.summary}
					imageURI={projectData.screenshotURIs[0]}
					linkURL={projectData.projectPageURI}
					key={projectData.id}
				/>
			))
	}

	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<main className="container">
				<PageHeader
					title="Projects"
					description="Here are some of the personal projects I have worked on:"
				/>
				<article>
					<section>
						Filter by language:{' '}
						<select
							className={styles.select}
							onChange={(e) => setLanguage(e.target.value)}
						>
							{languages.map((mainLanguage, index) => (
								<option className={styles.selectOption} key={index}>
									{mainLanguage}
								</option>
							))}
						</select>
					</section>
					<section className={styles.projects}>{setProjects()}</section>
				</article>
			</main>
		</>
	)
}

export default Projects
