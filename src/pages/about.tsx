import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {
	PERSONAL_LINKEDIN_URL,
	PERSONAL_GITHUB_REPO_URL,
} from 'settings/constants'
import styles from 'styles/about.module.css'

const profilePicDimensions = { width: 200, height: 200 }

const pageTitle = 'About'

const About = () => (
	<>
		<Head>
			<title>{pageTitle}</title>
		</Head>
		<main className="container">
			<article>
				<section>
					<div className={styles.profilePictureContainer}>
						<Image
							className={styles.profilePicture}
							src="/images/profile-picture.jpg"
							width={profilePicDimensions.width}
							height={profilePicDimensions.height}
							alt="profile picture"
						/>
					</div>
				</section>
				<hr className={styles.hr} />
				<section className={styles.description}>
					<p>
						I am a Software Engineer with full-stack and DevOps experience,
						based in London. Connect with me on{' '}
						<a
							href={PERSONAL_LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
							className={styles.projectLink}
						>
							LinkedIn
						</a>{' '}
						and check out my repositories on{' '}
						<a
							href={PERSONAL_GITHUB_REPO_URL}
							target="_blank"
							rel="noreferrer"
							className={styles.projectLink}
						>
							GitHub
						</a>
						.
					</p>
					<p>
						My experience covers several programming languages but the ones I am
						most comfortable with are TypeScript and Python, as I have used them
						the most in building full-stack applications with React, Node.js and
						Flask. I also have experience with data science and machine learning
						technologies like NumPy, pandas and Scikit-Learn, as well as DevOps
						tools like Docker, Ansible, and Git CI/CD pipelines. Please take a
						look at some of the{' '}
						<Link className={styles.projectLink} href="/projects">
							personal projects
						</Link>{' '}
						I have worked on.
					</p>
					<p>
						During lockdown in 2020, I developed a regular running routine,
						aspiring to one day complete an ultramarathon (&#8805;50km). On the
						22nd of October 2023, I ran the Battersea Park Marathon and raised
						£275 for The Alzheimer's Society! To explore my running stats, click{' '}
						<Link className={styles.projectLink} href="/logs/running">
							here
						</Link>
						.
					</p>
					<p>
						On the 8th of March 2024 I participated in Encode Club's 3 day AI
						Hackathon event, as the first hackathon I've taken part in. With the
						help of my two teammates, we won the bounty for "Most promising AI x
						Crypto Build" with a AI generated, text-based game generator called
						AI Adventure World. It was a lot of fun and will be looking for more
						hackathons to join in the future.
					</p>
				</section>
			</article>
		</main>
	</>
)

export default About
