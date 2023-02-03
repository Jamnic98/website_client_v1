import { useState } from 'react'
import Head from 'next/head'
import { Card, PageHeader } from '../components'
import projects from '../data/projects'
import type { ProjectData } from '../types/global'
import styles from '../styles/projects.module.css'

const languages = [
  '',
  ...Array.from(
    new Set(
      projects.map((projectData: ProjectData) => projectData.mainLanguage)
    )
  )
]

const Projects = () => {
  const [language, setLanguage] = useState('')

  const setProjects = () => {
    return projects
      .filter(
        (projectData: ProjectData) =>
          language === '' || projectData.mainLanguage === language
      )
      .map((projectData: ProjectData) => {
        return (
          <Card
            title={projectData.title}
            description={projectData.shortDescription}
            imageURI={projectData.screenshotURIs[0]}
            linkURL={projectData.projectPageURI}
            key={projectData.id}
          />
        )
      })
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <main className='container'>
        <PageHeader
          title='Projects'
          description='Here are the projects I have worked on:'
        />
        <article>
          <section>
            Filter by language:{' '}
            <select
              className={styles.select}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((mainLanguage, i) => {
                return (
                  <option className={styles.selectOption} key={i}>
                    {mainLanguage}
                  </option>
                )
              })}
            </select>
          </section>
          <section className={styles.projects}>{setProjects()}</section>
        </article>
      </main>
    </>
  )
}

export default Projects
