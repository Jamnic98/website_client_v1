import { projectObjType } from '../types/global';
import blueCheeseClassifier from './projects/blueCheeseClassifier';
import cryptoViewer from './projects/cryptoViewer';
import inventoryManagementSystem from './projects/inventoryManagementSystem';
import libraryBookRenewer from './projects/libraryBookRenewer';
import looseChangeCalculator from './projects/looseChangeCalculator';
import portfolioWebsite from './projects/portfolioWebsite';
import pyramidSolitaire from './projects/pyramidSolitaire';
import readingLog from './projects/readingLog';
import scrabbleScorekeeper from './projects/scrabbleScorekeeper';
import touchTyping from './projects/touchTyping';

const projects: projectObjType[] = [
  portfolioWebsite,
  scrabbleScorekeeper,
  cryptoViewer,
  inventoryManagementSystem,
  pyramidSolitaire,
  libraryBookRenewer,
  blueCheeseClassifier,
  readingLog,
  touchTyping,
  looseChangeCalculator
];

export default projects;
