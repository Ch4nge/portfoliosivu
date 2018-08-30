import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import skillsReducer from './reducers/skillsReducer'
import projectsReducer from './reducers/projectsReducer'
import userReducer from './reducers/userReducer'
import navReducer from './reducers/navReducer'

const reducer = combineReducers({
  skills: skillsReducer,
  projects: projectsReducer,
  user: userReducer,
  activeNavi: navReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
