import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/about.module.css';

interface Props {}

const PROFILE_PIC_DIMS = { width: 200, height: 200 };

function About(props: Props) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main className='container'>
        <article>
          <section>
            <div className={styles.profilePictureContainer}>
              <Image
                className={styles.profilePicture}
                src='/images/profile-picture.png'
                width={PROFILE_PIC_DIMS.width}
                height={PROFILE_PIC_DIMS.height}
                alt='profile picture'
              />
            </div>
          </section>
          <hr className={styles.hr} />
          <section className={styles.description}>
            <p>
              I am a self-taught developer and technology enthusiast with
              object-oriented and full stack development experience.
            </p>
            <p>
              JavaScript is the language I am most experienced with, having
              worked extensively with Node.js and React. I also have an in-depth
              understanding of Python, utilising it in game development, machine
              learning, image processing and web scraping applications. In
              addition to JavaScript and Python, I have previously used other
              languages such as Java, C++ and SQL in personal coding projects,
              some of which can be found{' '}
              <Link href='/projects'>
                <a className={styles.projectLink}>here</a>
              </Link>
              .
            </p>
            <p>
              Since late 2020, running has become a regular activity. I often
              run 3-4 times each week and it is a goal of mine to one day run an
              ultramarathon.{' '}
              <Link href='/logs/running'>
                <a className={styles.projectLink}>Here</a>
              </Link>{' '}
              is a link to my running stats.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

export default About;
