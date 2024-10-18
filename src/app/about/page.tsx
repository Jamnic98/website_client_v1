import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
	PERSONAL_LINKEDIN_URL,
	PERSONAL_GITHUB_REPO_URL,
} from 'settings/constants'
import styles from 'styles/about.module.css'

const profilePicDimensions = { width: 220, height: 220 }

export const metadata: Metadata = {
	title: 'About Me',
}

const About = () => (
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
				<h2>About Me</h2>
				<p>
					I am a Software Engineer with full-stack and DevOps experience, based
					in London. Connect with me on{' '}
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
				<h2>Coding Experience</h2>
				<p>
					TypeScript and Python are the languages I am most experienced with, 
					having used them both perofessionally and personally to build
					performant and scalable web applications. 
					Building full-stack applications with React, Node.js and
					Flask. I also have experience with data science and machine learning
					technologies like NumPy, pandas and Scikit-Learn, as well as DevOps
					tools like Docker, Ansible, and Git CI/CD pipelines. 
					These skills I aquired through a combination of self-study, 
					online courses and working commercially as a Software Developer.
				</p>
				<p>
					Please take a look at some of the{' '}
						<Link className={styles.projectLink} href="/projects">
							personal projects
						</Link>{' '}
					 I have worked on.
				</p>
				<h2>Hackathon Win</h2>
				<p>
					{/* TODO: FIX! */}
					On the 8th of March 2024 I participated in the largest A.I Hackathon event in London.
					It was a a 3 day event, held by Encode Club and hundreds of applicants. 
					As the first hackathon I&apos;ve taken part in. 
					With the help of my two teammates, we won the bounty for &quot;Most promising AI x Crypto Build&quot;
					with a AI generated, text-based game generator called AI Adventure World. 
					It was a lot of fun and will be looking for more hackathons to join in the future.
				</p>
				<h2>Running and Marathon</h2>
				<p>
					Since 2020, I have cultivated a regular running routine,
					aspiring to one day complete an ultramarathon (&#8805;50km).
				</p>
				<p>
				On the
					22nd of October 2023, I ran the Battersea Park Marathon and raised
					£275 for The Alzheimer&apos;s Society! To explore my running stats,
					click{' '}
					<Link className={styles.projectLink} href="/logs/running">
						here
					</Link>
					.
				</p>
			</section>
		</article>
	</main>
)

export default About
