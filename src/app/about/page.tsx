import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
	AI_ADVENTURE_WRLD_GITHUB_LINK,
	AI_HACKATHON_LINK,
	PERSONAL_LINKEDIN_URL,
	PERSONAL_GITHUB_REPO_URL,
} from 'settings/constants'
import styles from 'styles/about.module.css'

const aboutMePhotoDimensions = { width: 220, height: 220 }

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
						width={aboutMePhotoDimensions.width}
						height={aboutMePhotoDimensions.height}
						alt="profile picture"
					/>
				</div>
			</section>
			<hr className={styles.hr} />
			<section className={styles.description}>
				<h2>About Me</h2>
				<p>
					A Full-Stack Software Engineer, based
					in London. Connect with me on
					<>
						{' '}
						<a
							href={PERSONAL_LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
							className={styles.projectLink}
						>
							LinkedIn
						</a>
						{' '}
					</>
					and take a look at my
					<>
						{' '}
						<a
							href={PERSONAL_GITHUB_REPO_URL}
							target="_blank"
							rel="noreferrer"
							className={styles.projectLink}
						>
							GitHub
						</a>
						{' '}
					</>
					repositories.
				</p>
				<h2>Coding Experience</h2>
				<p>
					TypeScript and Python are the langauges I excell with, having used them both commercially and personally to build
					performant and scalable full-stack web applications, with tools like React, Node.js and Flask. 
					During my 2.5 years at Qudo, I gained exposure to DevOps tools such as Docker, Ansible, and Git CI/CD pipelines.
				</p>
				<p>
					Please take a look at some of the
					<>
						{' '}
							<Link className={styles.projectLink} href="/projects">
								personal projects
							</Link>
						{' '}I have worked on.
					</>
				</p>
				<h2>Hackathon Win</h2>
				<p>
					On the 8th of March 2024 I participated in the largest
					<>
						{' '}
							<a
								href={AI_HACKATHON_LINK}
								target="_blank"
								rel="noreferrer"
								className={styles.projectLink}
							>
								A.I Hackathon
							</a>
						{' '}
					</>
					event in London.
					The event ran for 3 days, and 600+ applicants joined to compete for a total cash pool of £20,000.
				</p>
				<p>
					Alongside two other developers, we secured 1st place for the &quot;Most promising AI x Crypto Build&quot; bounty,
					with a AI generated, text-based game generator called
					<>
						{' '}
							<a
								href={AI_ADVENTURE_WRLD_GITHUB_LINK}
								target="_blank"
								rel="noreferrer"
								className={styles.projectLink}
							>
								AI Adventure World.
							</a>
						{' '}
					</>
					It was a lot of fun and will be looking for more hackathons to join in the future!
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
