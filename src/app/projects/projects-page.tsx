'use client'
import { useState } from 'react'

import { Card, PageHeader } from 'components'
import projects from 'data/projects'
import { Project } from 'types'
import styles from 'styles/projects.module.css'
import Link from 'next/link'

export default function Page() {
	const languages = [
		'',
		...(Array.from(
			new Set(projects.map((projectData: Project) => projectData.mainLanguage))
		) as string[]),
	]
	const [language, setLanguage] = useState(languages[0])

	// Filter the projects based on the selected language
	const filteredProjects = projects.filter(
		(projectData: Project) =>
			language === '' || projectData.mainLanguage === language
	)

	return (
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
						{languages.map((mainLanguage: string, index) => (
							<option className={styles.selectOption} key={index}>
								{mainLanguage}
							</option>
						))}
					</select>
				</section>
				<section>
					<div className={styles.projects}>
						{filteredProjects.map((projectData: Project) => (
							<Link
								href={`/projects/${projectData.id}`}
								data-testid="application-card"
								key={projectData.id}
							>
								<Card
									title={projectData.title}
									description={projectData.summary}
									imageURI={projectData.screenshotURIs[0]}
								/>
							</Link>
						))}
					</div>
				</section>
			</article>
		</main>
	)
}
