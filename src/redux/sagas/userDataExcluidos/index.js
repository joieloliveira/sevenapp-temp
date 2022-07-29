import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import {
    getDataUserExcluidosSuccess, getDataUserExcluidosFailure,
    putDataUserExcluidosSuccess, putDataUserExcluidosFailure,
    deleteDataUserExcluidosSuccess, deleteDataUserExcluidosFailure
} from '../../actions'
import * as types from '../../types'

import api from '../../../config/configApi';

let userApi = []
//=============================================================================================
const getData = async () => {
    try {
        const headers = {
            'headers': {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }
        const response = await api.get("excluidosUsers")
        //const response = await api.get("localost:3000/users" + localStorage.getItem('id'), headers)
        userApi = response.data.users.docs
        //console.log(userApi);
        return true
    } catch (error) {
        //console.log(error);
        return false
    }
}
export function* getUserExcluidosData(action) {
    try {
        yield call(getData, action.payload)
        yield put(getDataUserExcluidosSuccess(userApi))
    } catch (error) {
        yield put(getDataUserExcluidosFailure(userApi))
    }
}
//=============================================================================================
const putData = async (id) => {
    try {
        const headers = {
            'headers': {
                //'Authorization': "Bearer " + localStorage.getItem('token'),
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json',
            }
        }
        //const response = await api.delete("users", data, headers) 
        console.log(id);
        const response = await api.put(`${"restaurarUsers/" + id}`)
        userApi = response
        return true
    } catch (error) {
        //console.log(error);
        return false
    }
}
export function* putUserExcluidosData(action) {
    try {
        yield call(putData, action.payload)
        yield put(putDataUserExcluidosSuccess(userApi))
    } catch (error) {
        yield put(putDataUserExcluidosFailure(userApi))
    }
}
//=============================================================================================
const deleteData = async (id) => {
    try {
        const headers = {
            'headers': {
                //'Authorization': "Bearer " + localStorage.getItem('token'),
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json',
            }
        }
        //const response = await api.delete("users", data, headers) 
        console.log(id);
        const response = await api.delete(`${"users/" + id}`)
        userApi = response
        return true
    } catch (error) {
        //console.log(error);
        return false
    }
}
export function* deleteUserExcluidosData(action) {
    try {
        yield call(deleteData, action.payload)
        yield put(deleteDataUserExcluidosSuccess(userApi))
    } catch (error) {
        yield put(deleteDataUserExcluidosFailure(userApi))
    }
}
//=============================================================================================
export default all(
    [
        takeLatest(types.GET_DATA_USER_EXCLUIDOS_REQUEST, getUserExcluidosData,),
        takeLatest(types.PUT_DATA_USER_EXCLUIDOS_REQUEST, putUserExcluidosData),
        takeLatest(types.DELETE_DATA_USER_EXCLUIDOS_REQUEST, deleteUserExcluidosData),
    ]
)