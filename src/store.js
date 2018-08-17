import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import skillsReducer from './reducers/skillsReducer'

const reducer = combineReducers({
  skills: skillsReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
