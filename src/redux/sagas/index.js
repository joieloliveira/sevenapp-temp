import { all } from 'redux-saga/effects'
import userData from './userData'
import userDataExcluidos from './userDataExcluidos'

export default function* rootSaga() {
    return yield all([
        userData,
        userDataExcluidos
    ])
}