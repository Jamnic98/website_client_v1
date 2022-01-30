import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

interface Props {}

function Footer(props: Props) {
  return (
    <div className={styles.footer} data-testid='footer' aria-label='footer'>
      <div className={`${styles.footerContent} container`}>
        <nav className={styles.socialMediaLinks}>
          <a
            href='https://github.com/Jamnic98?tab=repositories'
            target='_blank'
            rel='noreferrer'
            className={styles.socialMediaLink}
          >
            <div>
              <span>
                <FaGithub />
              </span>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/jamie-stimpson-23ab11203/'
            target='_blank'
            rel='noreferrer'
            className={styles.socialMediaLink}
          >
            <div>
              <span>
                <FaLinkedin />
              </span>
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
