import React from 'react'
import Link from 'next/link'

import styles from './explorer.module.css'

type ExplorerDataType = {
	title: string
	description: string
	URI: string
}

interface ExplorerProps {
	title: string
	data: ExplorerDataType[]
}

export const Explorer: React.FC<ExplorerProps> = ({ title, data }) => (
	<>
		<h3 style={{ marginBottom: 0 }}>{title}</h3>
		<hr className="subRule" />
		<div>
			{data.map((d, index) => (
				<Link className={styles.window} href={d.URI} key={index}>
					<h4 className={styles.windowTitle}>{d.title}</h4>
					{d.description}
				</Link>
			))}
			<div className={styles.allProjectsLink}>
				<Link href="/projects">all projects</Link>
			</div>
		</div>
	</>
)
