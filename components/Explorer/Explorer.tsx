import React from 'react';
import Link from 'next/link';
import styles from './Explorer.module.css';

type data = {
  title: string;
  description: string;
  URI: string;
};

interface ExplorerProps {
  title: string;
  data: data[];
}

const Explorer: React.FC<ExplorerProps> = ({ title, data }) => (
  <>
    <h3>{title}</h3>
    <hr className='subRule' />
    <div>
      {data.map((d, index) => {
        return (
          <Link href={d.URI} key={index}>
            <a className={styles.window}>
              <h3 className={styles.windowTitle}>{d.title}</h3>
              {d.description}
            </a>
          </Link>
        );
      })}
      <div className={styles.allProjectsLink}>
        <Link href='/projects'>
          <a>all projects</a>
        </Link>
      </div>
    </div>
  </>
);

export default Explorer;
