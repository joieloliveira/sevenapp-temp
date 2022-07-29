import * as types from '../../types'

export function getDataUserRequest(data) {
    return {
        type: types.GET_DATA_USER_REQUEST,
    }
}

export function getDataUserSuccess(data) {
    return {
        type: types.GET_DATA_USER_SUCCESS,
        payload: data
    }
}

export function getDataUserFailure(data) {
    return {
        type: types.GET_DATA_USER_FAILURE,
        payload: data
    }
}
//===============================================
export function postDataUserRequest(data) {
    return {
        type: types.POST_DATA_USER_REQUEST,
        payload: data
    }
}

export function postDataUserSuccess(data) {
    return {
        type: types.POST_DATA_USER_SUCCESS,
        payload: data
    }
}

export function postDataUserFailure(data) {
    return {
        type: types.POST_DATA_USER_FAILURE,
        payload: data
    }
}
//===============================================
export function putDataUserRequest(data) {
    return {
        type: types.PUT_DATA_USER_REQUEST,
        payload: data
    }
}

export function putDataUserSuccess(data) {
    return {
        type: types.PUT_DATA_USER_SUCCESS,
        payload: data
    }
}

export function putDataUserFailure(data) {
    return {
        type: types.PUT_DATA_USER_FAILURE,
        payload: data
    }
}
//===============================================
export function deleteDataUserRequest(data) {
    return {
        type: types.DELETE_DATA_USER_REQUEST,
        payload: data
    }
}

export function deleteDataUserSuccess(data) {
    return {
        type: types.DELETE_DATA_USER_SUCCESS,
        payload: data
    }
}

export function deleteDataUserFailure(data) {
    return {
        type: types.DELETE_DATA_USER_FAILURE,
        payload: data
    }
}