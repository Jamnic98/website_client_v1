import { Metadata } from 'next'

import HomePage from './home-page'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Page() {
  const runs = await getData()
  return <HomePage runData={runs} />
}

const getData = async () => {
  try {
    // set get 1st of current month
    const date = new Date()
    date.setUTCDate(1)
    date.setUTCHours(0, 0, 0, 0)
    const timestamp = date.getTime()
    // fetch data
    const URL = (process.env.NEXT_PUBLIC_SERVER_URL as string) + `/runs?after=${timestamp}`
    const response = await fetch(URL, { next: { revalidate: 3600 } })
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const { runs } = await response.json()
    return runs
  } catch (error) {
    console.error(error)
    return null
  }
}
