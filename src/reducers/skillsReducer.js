const initState = [
  {
    id: 0,
    imageSrc: 'https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png',
    title: 'React',
    content:  'React is web framework I&#44;m most confortable with, been using it in every single' +
              ' web application I have created. This site is created with React! My most recent' +
              ' react project would be this site (Which I created using complicated methods just' +
              ' to show you what I can do!).',
    gitLink: 'http://github.com',
    gitText: 'Github link to this sites code'
  },
  {
    id: 1,
    imageSrc: 'https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png',
    title: 'React',
    content:  'React is web framework I&#44;m most confortable with, been using it in every single' +
              ' web application I have created. This site is created with React! My most recent' +
              ' react project would be this site (Which I created using complicated methods just' +
              ' to show you what I can do!).',
    gitLink: 'http://github.com',
    gitText: 'Github link to this sites code'
  },
  {
    id: 2,
    imageSrc: 'https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png',
    title: 'React',
    content:  'React is web framework I&#44;m most confortable with, been using it in every single' +
              ' web application I have created. This site is created with React! My most recent' +
              ' react project would be this site (Which I created using complicated methods just' +
              ' to show you what I can do!).',
    gitLink: 'http://github.com',
    gitText: 'Github link to this sites code'
  },
  {
    id: 3,
    imageSrc: 'https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png',
    title: 'React',
    content:  'React is web framework I&#44;m most confortable with, been using it in every single' +
              ' web application I have created. This site is created with React! My most recent' +
              ' react project would be this site (Which I created using complicated methods just' +
              ' to show you what I can do!).',
    gitLink: 'http://github.com',
    gitText: 'Github link to this sites code'
  }
]
const skillsReducer = (state = initState, action) => {
  console.log(action)
  return state
}

export default skillsReducer
