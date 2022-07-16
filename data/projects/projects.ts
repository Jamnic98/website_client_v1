import { projectObjType } from '../../types/global';
import blueCheeseClassifier from './blueCheeseClassifier';
import cryptoViewer from './cryptoViewer';
import inventoryManagementSystem from './inventoryManagementSystem';
import libraryBookRenewer from './libraryBookRenewer';
import looseChangeCalculator from './looseChangeCalculator';
import portfolioWebsite from './portfolioWebsite';
import pyramidSolitaire from './pyramidSolitaire';
import readingLog from './readingLog';
import scrabbleScorekeeper from './scrabbleScorekeeper';
import touchTyping from './touchTyping';

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
