import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import {
    getDataUserSuccess, getDataUserFailure,
    postDataUserSuccess, postDataUserFailure,
    putDataUserSuccess, putDataUserFailure,
    deleteDataUserSuccess, deleteDataUserFailure
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
        const response = await api.get("users")
        //const response = await api.get("localost:3000/users" + localStorage.getItem('id'), headers)
        userApi = response.data.users.docs
        //console.log(userApi);
        return true
    } catch (error) {
        return false
    }
}
export function* getUserData(action) {
    try {
        yield call(getData, action.payload)
        yield put(getDataUserSuccess(userApi))
    } catch (error) {
        yield put(getDataUserFailure(userApi))
    }
}
//=============================================================================================
const postData = async (data) => {
    const headers = {
        'headers': {
            //'Authorization': "Bearer " + localStorage.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json',
        }
    }
    //const response = await api.delete("users", data, headers) 
    //console.log(data);
    const response = await api.post("users", data)
    userApi = response
    console.log(userApi);
    //if(userApi.code==102){userApi = response;return false}
}
export function* postUserData(action) {
    try {
        yield call(postData, action.payload)
        yield put(postDataUserSuccess(userApi))
    } catch (error) {
        yield put(postDataUserFailure(error))
    }
}
//=============================================================================================
const putData = async (data) => {
    try {
        const headers = {
            'headers': {
                //'Authorization': "Bearer " + localStorage.getItem('token'),
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; application/json',
            }
        }
        //const response = await api.delete("users", data, headers) 
        console.log(data);
        if(data.table=="fisica"){const response = await api.put("fisica", data); userApi = response}
        if(data.table=="academico"){const response = await api.put("academico", data); userApi = response}
        if(data.table=="ingles"){const response = await api.put("ingles", data); userApi = response}
        if(data.table=="tecnica"){const response = await api.put("tecnica", data); userApi = response}
        if(data.table=="treinos"){const response = await api.put("treinos", data); userApi = response}
        if(data.table=="users"){const response = await api.put("users", data); userApi = response}
        if(data.table=="tabelaTreino"){const response = await api.delete(`${"treinos/" + data.treinoId}`); userApi = response}
        return true
    } catch (error) {
        //console.log(error);
        return false
    }
}
export function* putUserData(action) {
    try {
        yield call(putData, action.payload)
        yield put(putDataUserSuccess(userApi))
    } catch (error) {
        yield put(putDataUserFailure(userApi))
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
        //console.log(data);
        const response = await api.delete(`${"users/" + id}`)
        userApi = response
        //console.log(userApi);
        return true
    } catch (error) {
        //console.log(error);
        return false
    }
}
export function* deleteUserData(action) {
    try {
        yield call(deleteData, action.payload)
        yield put(deleteDataUserSuccess(userApi))
    } catch (error) {
        yield put(deleteDataUserFailure(userApi))
    }
}
//=============================================================================================
export default all(
    [
        takeLatest(types.GET_DATA_USER_REQUEST, getUserData,),
        takeLatest(types.POST_DATA_USER_REQUEST, postUserData),
        takeLatest(types.PUT_DATA_USER_REQUEST, putUserData),
        takeLatest(types.DELETE_DATA_USER_REQUEST, deleteUserData),
    ]
)