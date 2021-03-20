import { combineReducers } from 'redux'
import { songFetchReducer } from './songReducers'

export default combineReducers({
  songFetch: songFetchReducer,
})
