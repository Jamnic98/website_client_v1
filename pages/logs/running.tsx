import React from 'react'
import axios from 'axios'
import { NextApiResponse } from 'next'
import Head from 'next/head'
import { RunningStats, PageHeader } from '../../components'
import { ScatterGraph, LineGraph } from '../../common/graphs'
import { RunData } from '../../types/global'

import * as d3 from 'd3'

export interface RunningProps {
  data: RunData[]
}

const Running = ({ data }: RunningProps) => (
  <>
    <Head>
      <title>Running</title>
    </Head>
    <main className='container'>
      <PageHeader
        title='Running'
        description='Here I detail my running stats and progression:'
      />
      <article>
        <section>
          Runs are recorded using the Strava app on my phone. I programmed the
          back end of this website to check daily if any new data has been
          uploaded to Strava and if there has been, to pull the data and save it
          to a database.
        </section>
        {data === null ? (
          <p>error retrieving running data</p>
        ) : (
          <section>
            <h2>All Time Running Data</h2>
            <hr className='subRule' />
            <h3>Stats</h3>
            <RunningStats runData={data} />
            <h3>Date / Distance Graph</h3>
            <LineGraph
              data={data.map((d: any) => {
                const { start_date_local, distance } = d
                return {
                  x: start_date_local,
                  y: distance / 1000
                }
              })}
              xAxisObj={{
                label: 'date (mm/yy)',
                labelOffset: 15,
                labelFormatter: d3.timeFormat('%m/%y')
              }}
              yAxisObj={{
                label: 'distance (km)',
                labelOffset: -10
              }}
            />
            <h3>Distance / Average Pace Graph</h3>
            <ScatterGraph
              data={data.map((d: any) => {
                const { distance, duration, start_date_local } = d
                return {
                  x: distance / 1000,
                  y: duration / 60 / (distance / 1000),
                  start_date_local
                }
              })}
              xAxisObj={{
                label: 'distance (km)',
                labelOffset: 0
              }}
              yAxisObj={{
                label: 'pace (minutes / km)',
                labelOffset: -15,
                labelFormatter: (d: any) => {
                  const minutes = Math.floor(d)
                  const seconds = Number((60 * (d - Math.floor(d))).toFixed(0))
                  const secondsStr =
                    seconds === 0 ? `:${seconds}0` : `:${seconds}`
                  return minutes + secondsStr
                }
              }}
            />
          </section>
        )}
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
        ? 'http://portfoliowebsiteserver-env.eba-zrm3ecty.us-east-1.elasticbeanstalk.com/runs'
        : 'http://localhost:3000/runs'

    const { data } = await axios.get(URL)
    return {
      props: { data }
    }
  } catch (error) {
    console.error(error)
    return {
      props: { data: null }
    }
  }
}
