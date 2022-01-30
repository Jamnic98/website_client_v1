import { projectObjType } from '../../types/global';

const looseChangeCalculator: projectObjType =   {
  id: 'loose-change-calculator',
  title: 'Loose Change Calculator',
  shortDescription: 'A calculator for summing loose change (GBP).',
  longDescription: [
    `This is one of the first Python programs I wrote. The application is designed so that the user 
    only has to enter the number of coins for each denomination and the calculator will return the total.`
  ],
  projectPageURI: '/projects/loose-change-calculator',
  screenshotURIs: ['/images/loose-change-calculator.png'],
  mainLanguage: 'Python',
  links: [
    {
      label: 'GitHub link',
      URL: 'https://github.com/Jamnic98/loose-change-calculator',
      type: 'external'
    }
  ], techStack: ['Python', 'Tkinter']
}

export default looseChangeCalculator;
