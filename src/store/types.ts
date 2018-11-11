import { Link, Project, ProjectTags, OpenSourceContribution } from '../types';

export type State = {
  socialLinks: Link[];
  projects: Project[];
  selectedProject: SelectedProject;
  openSourceContributions: OpenSourceContribution[];
};

export type SelectedProject = {
  project: Project;
  index: number;
  currentImageIndex: number /** The image currently displayed in the gallery. */;
};

const projects: Project[] = [
  {
    name: 'Market Madness',
    links: [
      { text: 'Demo', url: 'https://market-madness-game.herokuapp.com' },
      { url: 'https://github.com/EricTran5791/market-madness' },
    ],
    description: `A head-to-head deck building game built with React and MobX State Tree.
          I also built a card editor to generate the JSON card database using Microsoft Office UI Fabric components.
          Development is halted because this was a hobby project used to learn React.`,
    images: [
      '/static/images/project-mm.png',
      '/static/images/project-mm-2.png',
      '/static/images/project-mm-3.png',
    ],
    tags: [ProjectTags.React],
  },
  {
    name: 'Personal Website',
    links: [{ url: 'https://github.com/EricTran5791/eric-tran' }],
    description: `My personal website built using Vue.
          My website also leverages Vuex, CSS Grid, and the GitHub GraphQL API.`,
    images: ['/static/images/project-et.png'],
    tags: [ProjectTags.Vue],
  },
  {
    name: 'The Improv Embassy',
    links: [{ url: 'https://www.improvembassy.com' }],
    description: `The Improv Embassy offers regular classes and shows for improv and sketch comedy.
          Highly customized and responsive components include a blogging platform, an events
          calendar, and an e-commerce shop.`,
    images: ['/static/images/project-ie.png'],
    tags: [ProjectTags.WordPress, ProjectTags.WooCommerce],
  },
  {
    name: 'Ottawa Improv Festival',
    links: [{ url: 'https://www.ottawaimprovfestival.com/' }],
    description: `The annual Ottawa Improv Festival features a variety of local and out-of-town acts.
          The website is a central hub for festival information, ticket sales, and workshop registrations.`,
    images: ['/static/images/project-oif.png'],
    tags: [ProjectTags.WordPress],
  },
  {
    name: 'Length Weight Converter',
    links: [
      {
        url:
          'https://play.google.com/store/apps/details?id=ca.erictran.lengthweightconverter',
      },
    ],
    description: `This was my first Android app.
          The premise is simple: to convert length and weight measurements.
          Overall, it was a great learning experience and I still use the app every now and then.`,
    images: ['/static/images/project-lwc.png'],
    tags: [ProjectTags.Android],
  },
];

export const initialState: State = {
  socialLinks: [
    {
      text: 'Twitter',
      url: 'https://twitter.com/EricTran5791',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/EricTran5791',
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/erictran5791',
    },
  ],
  projects,
  selectedProject: {
    project: projects[0],
    index: 0,
    currentImageIndex: 0,
  },
  openSourceContributions: [],
};
