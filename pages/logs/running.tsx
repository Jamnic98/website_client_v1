import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { type NextApiResponse } from 'next'

import { PageHeader, RunningDataView } from 'components'
import { type RunDataType } from 'types'

export interface RunningProps {
	data: RunDataType[]
}

const pageTitle = 'Running'
const pageHeaderTitle = 'Running'
const pageHeaderDescription = 'Here I detail my running stats and progression:'
const pageDescription =
	"Runs are recorded using the Strava app. The backend of this website utilises Strava's API to pull my running data and store it in a database. When the page loads, the database is queried and the data is fetched."
const errorMsg = '*error retrieving running data*'

const Running: React.FC<RunningProps> = ({ data }) => (
	<>
		<Head>
			<title>{pageTitle}</title>
		</Head>
		<main className="container">
			<PageHeader title={pageHeaderTitle} description={pageHeaderDescription} />
			<article>
				<p>{pageDescription}</p>
				<section>
					{data ? <RunningDataView data={data} /> : <div>{errorMsg}</div>}
				</section>
			</article>
		</main>
	</>
)

export default Running

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=43200')
	try {
		const URL =
			process.env.NODE_ENV === 'production'
				? process.env.SERVER_URL + '/runs'
				: 'http://localhost:3000/runs'

		const { data } = await axios.get(URL)
		return {
			props: { data },
		}
	} catch (error) {
		console.error(error)
		return {
			props: { data: null },
		}
	}
}
