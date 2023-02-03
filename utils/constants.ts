import type { NavlinkData } from '../types/global'

export const navlinkObjArr: NavlinkData[] = [
  {
    label: 'logs',
    url: '/logs/running',
    children: [
      { label: 'running', url: '/logs/running', children: [] }
      // { label: 'weight lifting', url: '/logs/weight-lifting', children: [] },
      // { label: 'habit tracker', url: '/logs/habit-tracker', children: [] },
      // { label: 'reading', url: '/logs/reading', children: [] }
    ]
  },
  { label: 'projects', url: '/projects', children: [] },
  { label: 'about ', url: '/about', children: [] }
]
