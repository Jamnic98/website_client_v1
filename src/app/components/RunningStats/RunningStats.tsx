import {
	reduceSumFunc,
	getAverageDistanceString,
	getAverageDurationString,
	getFurthestDistanceString,
	getTotalDistanceString,
	getTotalDurationString,
} from 'utils'
import { type RunDataType } from 'types'

import styles from './runningStats.module.css'

interface RunningStatsProps {
	runData: RunDataType[]
}

export const RunningStats: React.FC<RunningStatsProps> = ({ runData }) => {
	// distance
	const distanceList = runData.map((runData: RunDataType) => runData.distance)
	const furthestDistanceInMeters = distanceList.length
		? Math.max(...distanceList)
		: 0
	const totalDistanceInMeters = distanceList.length
		? distanceList.reduce((a, b) => reduceSumFunc(a, b))
		: 0

	// duration
	const durationList = runData.map((runData: RunDataType) => runData.duration)
	const totalDurationInSeconds = durationList.length
		? durationList.reduce((a, b) => reduceSumFunc(a, b))
		: 0

	return (
		<div className={styles.allTimeStats}>
			<ul className={styles.statGroup}>
				<li>
					<span>{getTotalDistanceString(totalDistanceInMeters)}</span>
				</li>
				<li>
					<span>{getFurthestDistanceString(furthestDistanceInMeters)}</span>
				</li>
				<li>
					<span>
						{getAverageDistanceString(
							distanceList.length
								? totalDistanceInMeters / distanceList.length
								: 0
						)}
					</span>
				</li>
			</ul>
			<ul className={styles.statGroup}>
				<li>
					<span>{getTotalDurationString(totalDurationInSeconds)}</span>
				</li>
				<li>
					<span>
						{getAverageDurationString(
							durationList.length
								? totalDurationInSeconds / durationList.length
								: 0
						)}
					</span>
				</li>
				<li>
					<span>Run count: {runData.length}</span>
				</li>
			</ul>
		</div>
	)
}
