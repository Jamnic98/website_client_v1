import React from 'react';
import {
  getAverageDistanceString,
  getAverageDurationString,
  getFurthestDistanceString,
  getTotalDistanceString,
  getTotalDurationString
} from '../../helpers/helpers';
import { runDataType } from '../../types/global';
import styles from './RunningStats.module.css';

interface Props {
  runData: runDataType[];
}

const RunningStats = (props: Props) => {
  // distance
  const distanceList = props.runData.map(
    (runData: runDataType) => runData.distance
  );
  const furthestDistanceInMeters =
    distanceList.length > 0 ? Math.max(...distanceList) : 0;
  const totalDistanceInMeters =
    distanceList.length > 0
      ? distanceList.reduce((a: number, b: number) => a + b)
      : 0;

  // duration
  const durationList = props.runData.map(
    (runData: runDataType) => runData.duration
  );
  const totalDurationInSeconds =
    durationList.length > 0
      ? durationList.reduce((a: number, b: number) => a + b)
      : 0;

  return (
    <div className={styles.allTimeStats}>
      <ul className={styles.statGroup}>
        <li>
          <span>{getFurthestDistanceString(furthestDistanceInMeters)}</span>
        </li>
        <li>
          <span>{getTotalDistanceString(totalDistanceInMeters)}</span>
        </li>
        <li>
          <span>
            {getAverageDistanceString(
              distanceList.length > 0
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
              durationList.length > 0
                ? totalDurationInSeconds / durationList.length
                : 0
            )}
          </span>
        </li>
        <li>
          <span>Run count: {props.runData.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default RunningStats;
