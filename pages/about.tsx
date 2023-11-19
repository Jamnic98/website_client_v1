import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/about.module.css'

const profilePicDimensions = { width: 200, height: 200 }

const About = () => (
	<>
		<Head>
			<title>About</title>
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
						I'm a technology enthusiast and self-taught Software Engineer with
						Full Stack and DevOps experience. Please take a look at some of the{' '}
						<Link className={styles.projectLink} href="/projects">
							personal projects
						</Link>{' '}
						I have worked on.
					</p>
					<p>
						Since September 2020, I have developed a regular running routing and
						it is an aspiration of mine to one day complete an ultramarathon
						(50km). To explore my running stats, click{' '}
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
