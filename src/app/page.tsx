import { Metadata } from 'next'

import HomePage from './home-page'

export const metadata: Metadata = {
	title: 'Home',
}

const getData = async () => {
	try {
		// set get 1st of current month
		const date = new Date()
		date.setUTCDate(1)
		date.setUTCHours(0, 0, 0, 0)
		const timestamp = date.getTime()

		const URL = (process.env.NEXT_PUBLIC_SERVER_URL as string) + `/runs?after=${timestamp}`
		const response = await fetch(URL)
		if (!response.ok) {
			// This will activate the closest `error.js` Error Boundary
			throw new Error('Failed to fetch data')
		}
		return await response.json()
	} catch (error) {
		console.error(error)
		return null
	}
}

export default async function Page() {
	// Fetch data directly in a Server Component
	const data = await getData()
	// Forward fetched data to your Client Component
	return <HomePage runData={data} />
}
