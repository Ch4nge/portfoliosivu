import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import skillsReducer from './reducers/skillsReducer'
import projectsReducer from './reducers/projectsReducer'

const reducer = combineReducers({
  skills: skillsReducer,
  projects: projectsReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
