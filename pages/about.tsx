import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.css";

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
              width={200}
              height={200}
              alt="profile picture"
            />
          </div>
        </section>
        <hr className={styles.hr} />
        <section className={styles.description}>
          <p>
            I'm a technology enthusiast and self-taught developer with
            full-stack and DevOps experience. Currently, I'm employed as a
            software engineer at Qudo, where I primarily work with TypeScript
            and the React framework. Additionally, I possess a solid
            understanding of Python, which I have applied in various domains,
            such as building REST APIs and machine learning models. Throughout
            my coding journey, I have gained experience with other languages
            like Java, C++, and SQL for use in{" "}
            <Link href="/projects" legacyBehavior>
              <a className={styles.projectLink}>personal projects</a>
            </Link>
            .
          </p>
          <p>
            Aside from my passion for technology, I have developed a consistent
            running routine since Septemeber 2020. I typically run &gt;20km per
            week, and my long-term aspiration is to complete an ultramarathon.
            On the 22nd of October, I will be participating in a marathon at
            Battersea Park in memory of my great uncle, Aubry Jackson. This run
            also serves as an opportunity to raise funds for the Alzheimer's
            Society charity, which is close to my heart. If you would like to
            contribute to this cause, please consider visiting my{" "}
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
// https://qudo.ai/
