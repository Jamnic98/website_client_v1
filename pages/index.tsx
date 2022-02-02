import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '../components/PageHeader/PageHeader';
import Explorer from '../components/Explorer/Explorer';
import RunningStats from '../components/RunningStats/RunningStats';
import styles from '../styles/index.module.css';
import projects from '../data/projects';

interface Props {
  data: any;
}

function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className='container'>
        <PageHeader
          headerObj={{
            title: 'Home',
            description: 'Welcome.'
          }}
        />
        <article className={styles.homeContent}>
          <section className={styles.homeDescription}>
            This entire website, including the front end user interface
            components and back end architecture, was designed, created and
            styled from scratch, by{' '}
            <Link href='/about'>
              <a className={styles.projectLink}>me</a>
            </Link>
            . I built the site with scalability in mind and plan to integrate
            more features and expand on existing content in the near future.
          </section>
          <section className={styles.projectExplorer}>
            <Explorer
              title='Project Explorer'
              data={projects
                .map((project) => {
                  return {
                    title: project.title,
                    description: project.shortDescription,
                    URI: project.projectPageURI
                  };
                })
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)}
            />
          </section>
          {props.data === null ? null : (
            <section>
              <h3>
                Running Stats for{' '}
                {new Date().toLocaleString('default', { month: 'long' })}
              </h3>
              <hr className='subRule' />
              <div className={styles.runningWeek}>
                <RunningStats runData={props.data} />
                <div className={styles.allProjectsLink}>
                  <Link href='/logs/running'>
                    <a>all stats</a>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}

export default Home;

export async function getServerSideProps({ res }: any) {
  res.setHeader('Cache-Control', 'public, s-maxage=43200');
  try {
    // set get 1st of current month
    const previousDate = new Date();
    previousDate.setDate(1);
    previousDate.setHours(-1);

    let URL = `http://localhost:3000/runs?after=${previousDate}`;
    if (process.env.NODE_ENV === 'production') {
      URL = `http://portfoliowebsiteserver-env.eba-zrm3ecty.us-east-1.elasticbeanstalk.com/runs?after=${previousDate}`;
    }

    const { data } = await axios.get(URL);
    return {
      props: { data }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null }
    };
  }
}
