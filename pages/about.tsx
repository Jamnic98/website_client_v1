import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { personalLinkedInURL, personalGithubReposURL } from 'constants/'
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
						Hi, I'm Jamie Stimpson, a technology enthusiast and self-taught
						Software Engineer with Full Stack and DevOps experience based in
						London. Connect with me on{' '}
						<a
							href={personalLinkedInURL}
							target="_blank"
							rel="noreferrer"
							className={styles.projectLink}
						>
							LinkedIn
						</a>
						, or check out my repositories on{' '}
						<a
							href={personalGithubReposURL}
							target="_blank"
							rel="noreferrer"
							className={styles.projectLink}
						>
							GitHub
						</a>
						!
					</p>
					<p>
						My experience covers various programming languages and frameworks,
						including TypeScript, React, Python, and AWS technologies. My
						expertise extends to web development tools like React, Flask,
						Next.js, and more. I also have experience in Data Science and A.I
						tools such as NumPy, pandas, scikit-learn, and TensorFlow, as well
						as DevOps tools like Docker, Ansible, and GitLab CI/CD pipelines.
						Please take a look at some of the{' '}
						<Link className={styles.projectLink} href="/projects">
							personal projects
						</Link>{' '}
						I have worked on.
					</p>
					<p>
						Since 2020, I have developed a regular running routine, aspiring to
						one day complete an ultramarathon (&#8805;50km). On the 22nd of
						October 2023, I ran the Battersea Park Marathon and raised £275 for
						The Alzheimer's Society! To explore my running stats, click{' '}
						<Link className={styles.projectLink} href="/logs/running">
							here
						</Link>
						.
					</p>
				</section>
			</article>
		</main>
	</>
)

export default About
