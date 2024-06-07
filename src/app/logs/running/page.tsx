import { Metadata } from 'next'

import { PageHeader, RunningDataView } from 'app/components'

const pageTitle = 'Running'
const pageHeaderDescription = 'Here I detail my running stats and progression:'
const errorMsg = '*error retrieving running data*'

// export interface RunningProps {
// 	data: RunDataType[]
// }

export const metadata: Metadata = {
	title: 'Running',
}

const Running: React.FC = async () => {
	const data = await getData()
	return (
		<>
			<main className="container">
				<PageHeader title={pageTitle} description={pageHeaderDescription} />
				<article>
					<section>
						<p>
							Runs are recorded using the Strava app. The backend of this
							website utilises Strava's API to pull my running data and store it
							in a database. When the page loads, the database is queried and
							the data is fetched.
						</p>
						<p>
							Since 2020, I have developed a regular running routine, aspiring
							to one day complete an ultramarathon (&#8805;50km). On the 22nd of
							October 2023, I ran the Battersea Park Marathon and raised £275
							for The Alzheimer's Society!
						</p>
					</section>
					<section>
						{data ? <RunningDataView runData={data} /> : <div>{errorMsg}</div>}
					</section>
				</article>
			</main>
		</>
	)
}

const getData = async () => {
	const URL = (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/runs'
	const response = await fetch(URL)
	if (!response.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return await response.json()
}

export default Running
