import Link from 'next/link';
import React from 'react';
import styles from './Explorer.module.css';

type data = {
  title: string;
  description: string;
  URI: string;
};

interface Props {
  title: string;
  data: data[];
}

function Explorer(props: Props) {
  const { title, data } = props;
  return (
    <>
      <h3>{title}</h3>
      <hr className='subRule' />
      <div>
        {data.map((d, i) => {
          return (
            <Link href={d.URI} key={i}>
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
}

export default Explorer;
