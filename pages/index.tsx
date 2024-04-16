import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { type NextApiResponse } from 'next'

import { PageHeader, Explorer, RunningStats } from 'components'
import { type RunDataType } from 'types'
import projects from 'data/projects'
import styles from 'styles/index.module.css'

interface HomePageProps {
	data: RunDataType[]
}

export const Home = (props: HomePageProps) => (
	<>
		<Head>
			<title>Home</title>
		</Head>
		<main className="container">
			<PageHeader title="Home" description="Welcome to my website." />
			<article className={styles.homeContent}>
				<section className={styles.homeDescription}>
					<p>
						This website was built with scalability in mind, and, I have
						exciting plans to integrate additional features and expand upon the
						existing content. I hope you enjoy exploring the various facets of
						my work.
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
				{props.data && (
					<section>
						<h3>
							Running Stats for{' '}
							{/* current month as full word */}
							{new Date().toLocaleString('default', { month: 'long' })}
						</h3>
						<hr className="subRule" />
						<div className={styles.runningWeek}>
							<RunningStats runData={props.data} />
							<div className={styles.allProjectsLink}>
								<Link href="/logs/running">all stats</Link>
							</div>
						</div>
					</section>
				)}
			</article>
		</main>
	</>
)

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=43200')
	try {
		// set get 1st of current month
		const previousDate = new Date()
		previousDate.setDate(1)
		previousDate.setHours(-1)

		const URL =
			(process.env.NODE_ENV === 'production'
				? process.env.SERVER_URL
				: 'http://localhost:3000') + `/runs?after=${previousDate}`

		const { data } = await axios.get(URL)
		return {
			props: { data },
		}
	} catch (error) {
		console.error(error)
		return {
			props: { data: null },
		}
	}
}

export default Home
