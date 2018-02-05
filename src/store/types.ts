import { Link, Project, ProjectTags, OpenSourceContribution } from '../types';

export type State = {
  socialLinks: Link[];
  projects: Project[];
  selectedProject: SelectedProject | undefined;
  openSourceContributions: OpenSourceContribution[];
};

export type SelectedProject = {
  project: Project;
  index: number;
};

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
  projects: [
    {
      name: 'The Improv Embassy',
      url: 'http://www.improvembassy.com',
      description: `The Improv Embassy offers regular classes and shows for improv and sketch comedy.
            Highly customized and responsive components include a blogging platform, an events
            calendar, and an e-commerce shop.`,
      imageUrl: '/static/images/project-ie.png',
      tags: [ProjectTags.WordPress, ProjectTags.WooCommerce],
    },
    {
      name: 'Ottawa Improv Festival',
      url: 'http://www.ottawaimprovfestival.com/',
      description: `The annual Ottawa Improv Festival features a variety of local and out-of-town acts.
            The website is a central hub for festival information, ticket sales, and workshop registrations.`,
      imageUrl: '/static/images/project-oif.png',
      tags: [ProjectTags.WordPress],
    },
    {
      name: 'Length Weight Converter',
      url:
        'https://play.google.com/store/apps/details?id=ca.erictran.lengthweightconverter',
      description: `This was my first Android app.
            The premise is simple: to convert length and weight measurements.
            Overall, it was a great learning experience and I still use the app every now and then.`,
      imageUrl: '/static/images/project-lwc.png',
      tags: [ProjectTags.Android],
    },
    {
      name: 'Personal Website',
      url: 'https://github.com/EricTran5791/eric-tran',
      description: `My personal website built using Vue.
            My website also leverages Vuex, CSS Grid, and the GitHub GraphQL API.`,
      imageUrl: '/static/images/project-et.png',
      tags: [ProjectTags.Vue],
    },
    {
      name: 'Market Madness',
      url: 'https://github.com/EricTran5791/market-madness',
      description: `A head-to-head deck building game built with React and MobX State Tree.
            Work in progress.`,
      imageUrl: '/static/images/project-mm.png',
      tags: [ProjectTags.React],
    },
  ],
  selectedProject: undefined,
  openSourceContributions: [],
};
