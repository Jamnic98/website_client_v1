import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import PageHeader from '../../components/PageHeader/PageHeader';
import classNames from 'classnames';
import { CgExternal, CgInternal } from 'react-icons/cg';
import projects from '../../data/projects';
import styles from '../../styles/project.module.css';
import { projectObjType, projectLinkObjType } from '../../types/global';

interface ProjectProps {
  projectData: projectObjType;
}

const Project: FC<ProjectProps> = ({ projectData }) => {
  const setProjectLinks = (links: projectLinkObjType[]) => (
    <nav className={styles.projectLinks}>
      {links.map((link, index) => {
        if (link.type === 'external') {
          return (
            <a
              className={classNames(styles.projectLink, styles.link)}
              href={link.URL}
              target='_blank'
              rel='noreferrer'
              key={index}
            >
              {link.label} <CgExternal />
            </a>
          );
        } else if (link.type === 'internal') {
          return (
            <Link href={link.URL} key={index}>
              <a className={classNames(styles.projectLink, styles.link)}>
                {link.label} <CgInternal />
              </a>
            </Link>
          );
        }
      })}
    </nav>
  );

  const setProjectGallery = (screenshotURIs: string[]) => (
    <>
      {screenshotURIs.map((screenshotURI, index) => (
        <Image
          src={screenshotURI}
          key={index}
          width='350'
          height='350'
          alt='project image'
        />
      ))}
    </>
  );

  const setProjectDescriptions = (descriptionArray: string[]) => (
    <>
      {descriptionArray.map((paragraph: string, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </>
  );
  
  return (
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <main className='container'>
        <PageHeader
          headerObj={{
            title: projectData.title,
            description: projectData.shortDescription,
          }}
        />
        <article>
          <section>
            <b>Tech stack:</b>
            <br />
            {projectData.techStack.map((tech: string) => tech).join(', ')}
          </section>
          {projectData.links.length > 0 ? (
            <section>{setProjectLinks(projectData.links)}</section>
          ) : null}
          <section className={styles.gallery}>
            {setProjectGallery(projectData.screenshotURIs)}
          </section>
          <section>
            {setProjectDescriptions(projectData.longDescription)}
          </section>
          <Link href='/projects'>
            <a className={styles.link}>&larr; projects</a>
          </Link>
        </article>
      </main>
    </>
  );
};

export default Project;

function getAllProjectIds() {
  return projects.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });
}

function getProjectData(id: string) {
  return projects.filter((project) => {
    return project.id === id;
  })[0];
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const projectData = getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
