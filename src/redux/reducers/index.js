import { combineReducers } from 'redux'
import { userDataReducer } from './userData'
import { userDataExcluidosReducer } from './userDataExcluidos'

const rootReducer = combineReducers({
    userData: userDataReducer,
    userDataExcluidos: userDataExcluidosReducer,
})

export default rootReducer