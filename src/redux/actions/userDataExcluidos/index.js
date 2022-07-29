import * as types from '../../types'

export function getDataUserExcluidosRequest(data) {
    return {
        type: types.GET_DATA_USER_EXCLUIDOS_REQUEST,
    }
}

export function getDataUserExcluidosSuccess(data) {
    return {
        type: types.GET_DATA_USER_EXCLUIDOS_SUCCESS,
        payload: data
    }
}

export function getDataUserExcluidosFailure(data) {
    return {
        type: types.GET_DATA_USER_EXCLUIDOS_FAILURE,
        payload: data
    }
}

export function putDataUserExcluidosRequest(data) {
    return {
        type: types.PUT_DATA_USER_EXCLUIDOS_REQUEST,
        payload: data
    }
}

export function putDataUserExcluidosSuccess(data) {
    return {
        type: types.PUT_DATA_USER_EXCLUIDOS_SUCCESS,
        payload: data
    }
}

export function putDataUserExcluidosFailure(data) {
    return {
        type: types.PUT_DATA_USER_EXCLUIDOS_FAILURE,
        payload: data
    }
}

export function deleteDataUserExcluidosRequest(data) {
    return {
        type: types.DELETE_DATA_USER_EXCLUIDOS_REQUEST,
        payload: data
    }
}

export function deleteDataUserExcluidosSuccess(data) {
    return {
        type: types.DELETE_DATA_USER_EXCLUIDOS_SUCCESS,
        payload: data
    }
}

export function deleteDataUserExcluidosFailure(data) {
    return {
        type: types.DELETE_DATA_USER_EXCLUIDOS_FAILURE,
        payload: data
    }
}