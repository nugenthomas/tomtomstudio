const generateImages = appName => {
  const images = [];
  for (let i = 1; i <= numImages[appName]; i += 1) {
    images.push({
      original: require(`images/screenshots/${appName}/${i}.jpg`),
    });
  }
  return images;
};

const numImages = {
  shrnk: 3,
  'time-planner': 3,
  'meetup-scheduler': 2,
};

/**
 * List of portfolio work items to be displayed
 */
export default [
  {
    projectTitle: 'Project 1',
    projectInfo:
      'Blah Blah Blah',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    images: generateImages('time-planner'),
    tags: ['UX & UI Design', 'Brand Design', 'Motion Design'],
  },
  {
    projectTitle: 'Project 2',
    projectInfo:
      'Bluh Bluh Bluh',
    background: 'linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
    images: generateImages('meetup-scheduler'),
    tags: ['Motion Design', 'Brand Design'],
  },
  {
    projectTitle: 'Project 3',
    projectInfo:
      'Bleh Bleh Bleh',
    background: 'linear-gradient(to right, #0083B0, #00B4DB)',
    images: generateImages('shrnk'),

    tags: ['Brand Design', 'User Research'],
  },
];
