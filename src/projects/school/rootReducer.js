import {combineReducers} from 'redux'
import { useReducer } from 'react'
import reducers from './Redux/reducer'

const rootReducer=combineReducers({user:reducers})

export default rootReducer