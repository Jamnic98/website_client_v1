'use client'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats } from 'app/components'
import { RunDataType } from 'types'
import projects from 'data/projects'
import styles from 'styles/index.module.css'

interface HomePageProps {
	runData: RunDataType[]
}

export default function Page({ runData }: HomePageProps) {
	return (
		<main className="container">
			<PageHeader title="Home" description="Welcome to my website." />
			<article className={styles.homeContent}>
				<section className={styles.homeDescription}>
					<p>
						This website was built with scalability in mind, and, I plan to
						integrate additional features and expand upon the existing content.
						I hope you enjoy exploring the various facets of my work.
					</p>
				</section>
				<section>
					<Explorer
						title="Project Explorer"
						data={projects
							.map((project) => {
								return {
									title: project.title,
									description: project.summary,
									URI: project.projectPageURI,
								}
							})
							// randomly select 3 projects
							.slice(0, 3)}
					/>
				</section>
				<section>
					{runData ? (
						<>
							<h3>
								Running Stats for {/* current month as full word */}
								{new Date().toLocaleString('default', { month: 'long' })}
							</h3>
							<hr className="subRule" />
							<div className={styles.runningWeek}>
								<RunningStats runData={runData} />
								<div className={styles.allProjectsLink}>
									<Link href="/logs/running">all stats</Link>
								</div>
							</div>
						</>
					) : (
						<div>*Error fetching run data</div>
					)}
				</section>
			</article>
		</main>
	)
}
