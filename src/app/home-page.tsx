'use client'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats } from 'components'
import { RunDataType } from 'types'
import projects from 'data/projects'
import styles from 'styles/index.module.css'

interface HomePageProps {
	runData: RunDataType[]
}

export default function Page({ runData }: HomePageProps) {
	return (
		<main className="container">
			<PageHeader title="Home" description="" />
			<article className={styles.homeContent}>
				<section className={styles.homeDescription}>
					<p>Hello and welcome to my portfolio website!</p>
					<p>
						This site was built entirely from scratch using NextJS, Python, and
						MongoDB. Initially, I used React for the frontend and NodeJs for the
						backend but recently transitioned to my current stack. Here, you
						will find a range of my programming projects, primarily in Python
						and JavaScript/TypeScript, along with daily updates of my running
						data, which is fetched using Strava&apos;s API.
					</p>
					<p>
						This is an ongoing project where I handle everything from frontend
						and backend development to DevOps processes and deployments,
						ensuring the site remains dynamic and functional.
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
					<h3>
						Running Stats for {/* current month as full word */}
						{new Date().toLocaleString('default', { month: 'long' })}
					</h3>
					<hr className="subRule" />
					{runData ? (
						<>
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
