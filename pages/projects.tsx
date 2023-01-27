import React, { useState } from "react";
import projects from "../data/projects";
import Head from "next/head";
import styles from "../styles/projects.module.css";
import Card from "../components/Card/Card";
import PageHeader from "../components/PageHeader/PageHeader";
import { projectObjType } from "../types/global";

const languages = [
  "",
  ...Array.from(
    new Set(
      projects.map((projectData: projectObjType) => projectData.mainLanguage)
    )
  )
];

function Projects() {
  const [language, setLanguage] = useState("");

  const setProjects = () => {
    return projects
      .filter((projectData) =>
        language === "" ? true : projectData.mainLanguage === language
      )
      .map((projectData) => {
        return (
          <Card
            cardObj={{
              title: projectData.title,
              description: projectData.shortDescription,
              imageURI: projectData.screenshotURIs[0],
              linkURL: projectData.projectPageURI
            }}
            key={projectData.id}
          />
        );
      });
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <main className="container">
        <PageHeader
          headerObj={{
            title: "Projects",
            description: "Here are the projects I have worked on:"
          }}
        />
        <article>
          <section>
            Filter by language:{" "}
            <select
              className={styles.select}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((mainLanguage, i) => {
                return (
                  <option className={styles.selectOption} key={i}>
                    {mainLanguage}
                  </option>
                );
              })}
            </select>
          </section>
          <section className={styles.projects}>{setProjects()}</section>
        </article>
      </main>
    </>
  );
}

export default Projects;
