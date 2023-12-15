import { FaGithub, FaLinkedin } from 'react-icons/fa'
import classNames from 'classnames'

import { personalGithubReposURL, personalLinkedInURL } from 'constants/'
import styles from './footer.module.css'

export const Footer: React.FC = () => (
	<div className={styles.footer} id="footer" aria-label="footer">
		<div className={classNames('container', styles.footerContent)}>
			<nav className={styles.socialMediaLinks}>
				<a
					href={personalGithubReposURL}
					target="_blank"
					rel="noreferrer"
					className={styles.socialMediaLink}
				>
					<FaGithub />
				</a>
				<a
					href={personalLinkedInURL}
					target="_blank"
					rel="noreferrer"
					className={styles.socialMediaLink}
				>
					<FaLinkedin />
				</a>
			</nav>
		</div>
	</div>
)
