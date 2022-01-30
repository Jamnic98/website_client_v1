import { projectObjType } from '../../types/global'

const pyramidSolitaire: projectObjType = {
  id: 'pyramid-solitaire',
  title: 'Pyramid Solitaire',
  shortDescription:
    'A program based on a variation of the card game, solitaire.',
  longDescription: [
    `
    This program was written in Python using the Pygame library. It features sprite animations, programmed with
    vector maths, and can detect when there are no further moves playable.`
  ],
  projectPageURI: '/projects/pyramid-solitaire',
  screenshotURIs: [
    '/images/pyramid-solitaire.png',
    '/images/pyramid-solitaire-end-game.png',
    '/images/pyramid-solitaire-start-screen.png'
  ],
  mainLanguage: 'Python',
  links: [
    {
      label: 'GitHub link',
      URL: 'https://github.com/Jamnic98/pyramid-solitaire',
      type: 'external'
    }
  ],
  techStack: ['Python', 'Pygame']
};

export default pyramidSolitaire;
