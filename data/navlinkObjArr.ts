import type { navlinkObjType } from '../types/global';

// const navlinkObjArr: navlinkObj[] = [
//   { label: 'projects', url: '/projects', children: [] }
// ];

const navlinkObjArr: navlinkObjType[] = [
  {
    label: 'logs',
    url: '/logs/running',
    children: [
      { label: 'running', url: '/logs/running', children: [] },
      // { label: 'weight lifting', url: '/logs/weight-lifting', children: [] },
      // { label: 'habit tracker', url: '/logs/habit-tracker', children: [] },
      // { label: 'reading', url: '/logs/reading', children: [] }
    ]
  },
  { label: 'projects', url: '/projects', children: [] },
  { label: 'about ', url: '/about', children: [] }
];

/* [
  {
    label: 'blogs',
    url: '/blogs',
    children: [
      { label: 'progress reports', url: '/blogs/progress-reports', children: [] },
      { label: 'journal', url: '/blogs/journal', children: [] },
      { label: 'coding projects', url: '/blogs/projects', children: [] },
    ]
  },
  { label: 'vlogs', url: '/vlogs', children: [] },
  {
    label: 'logs',
    url: '/logs',
    children: [
      { label: 'running', url: '/logs/running', children: [] },
      { label: 'weight lifting', url: '/logs/weight-lifting', children: [] },
      { label: 'habit tracker', url: '/logs/habit-tracker', children: [] },
      { label: 'reading', url: '/logs/reading', children: [] }
    ]
  },
  {
    label: 'goals',
    url: '/goals',
    children: [
      { label: 'short term', url: '/goals/short-term', children: [] },
      { label: 'long term', url: '/goals/long-term', children: [] }
    ]
  },
  { label: 'about ', url: '/about', children: [] }
]; */

export default navlinkObjArr;
