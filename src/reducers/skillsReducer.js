const initState = [
  {
    id: 0,
    imageSrc: 'https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png',
    title: 'React / React-Native',
    content:  'React is web framework I\'m most confortable with, been using it in every single' +
              ' web application I have created. This site is created with React! My most recent' +
              ' react project would be this site (Which I created using complicated methods just' +
              ' to show you what I can do!).',
    gitLink: 'http://github.com',
    gitText: 'See example (this site)'
  },
  {
    id: 1,
    imageSrc: 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg',
    title: 'JS / HTML / CSS',
    content:  'Javascript is confusing language, but finally I have reached the point where writing' +
              ' it isnt painful anymore. Actually its quite fun. HTML and CSS is familar for me too.' +
              ' I dont see myself as a great css designer(yet), but frameworks such as semantic-ui makes my life' +
              ' so much easier.',
    gitLink: 'http://github.com',
    gitText: 'FullstackMOOC -course (You just have to trust me on this one)'
  },
  {
    id: 2,
    imageSrc: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
    title: 'Redux',
    content:  'Creating react apps is so much easier now, when I learned how the redux works.' +
              ' No more passing props through 10 components, keep the code simple. Use redux.' +
              ' "redux", "react-redux" and "redux-thunk", are the libraries I\'v been using.',
    gitLink: 'http://github.com',
    gitText: 'See example (this site)'
  },
  {
    id: 3,
    imageSrc: 'https://www.apollo-formation.com/wp-content/uploads/meteor-250x250.png',
    title: 'Meteor',
    content:  ' Meteor is a fullstack framework I\'v been using in a couple of projects' +
              ', really underrated framework in my opinion. Works great in small projects,' +
              ' is easy to use. etc. Some day this magical framework will take over the world!',
    gitLink: 'http://github.com',
    gitText: 'Bus/Todo/whatever -app. Created for learning purposes'
  },
  {
    id: 4,
    imageSrc: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fsupundharmarathne.files.wordpress.com%2F2013%2F08%2Fnodejs.png&f=1',
    title: 'Node.js / express',
    content:  'Express is a backend framework I\'v been studying lately. It seems super' +
              ' easy compared to Java Spring, which is the only other one that I have used.' +
              ' Looking foward to build backends, even faster than before!',
    gitLink: 'http://github.com',
    gitText: 'Bus/Todo/whatever -app. Created for learning purposes'
  },
  {
    id: 5,
    imageSrc: 'https://tinycode.hk/wp-content/uploads/2015/01/java-logo-png-300x300.png',
    title: 'Java / Spring',
    content:  'Java is the first language I learned and I think it\'s still my strongest' +
              ' programming language overall. I have created small projects with javafx and swing,' +
              ' and small backends to school project with Spring.',
    gitLink: 'http://github.com',
    gitText: 'My awesome game engine!'
  },
]
const skillsReducer = (state = initState, action) => {
  console.log(action)
  return state
}

export default skillsReducer
