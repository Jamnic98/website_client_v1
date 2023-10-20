import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "styles/about.module.css";

const profilePicDimensions = { width: 200, height: 200 };

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
            full-stack and DevOps experience. Please take a look at some of the{" "}
            <Link href="/projects" legacyBehavior>
              <a className={styles.projectLink}>personal projects</a>
            </Link>{" "}
            I have worked on.
          </p>
          <p>
            Since late September 2020, I have cultivated a consistent running
            routine. I typically run over 25km per week, and my long-term
            aspiration is to complete an ultramarathon (50km+). On the 22nd of
            October, I will be participating in a marathon at Battersea Park in
            memory of my great uncle, Aubry Jackson. This run also serves as an
            opportunity to raise funds for the Alzheimer's Society charity,
            which is close to my heart. If you would like to contribute to this
            cause, please consider visiting my{" "}
            <a
              href="https://www.justgiving.com/fundraising/marathon-jamie-stimpson"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              JustGiving page
            </a>
            . To explore my running stats, click{" "}
            <Link href="/logs/running" legacyBehavior>
              <a className={styles.projectLink}>here</a>
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  </>
);

export default About;
