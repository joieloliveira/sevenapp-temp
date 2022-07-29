import * as types from "../../types";

const STATE = {
  usersDataExcluidos: [],
  loading: false,
  reloading: false,
  error: "",
  toast:false,
}

export const userDataExcluidosReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_USER_EXCLUIDOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DATA_USER_EXCLUIDOS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersDataExcluidos: action.payload,
      };
    case types.GET_DATA_USER_EXCLUIDOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    //=================================================================
    case types.PUT_DATA_USER_EXCLUIDOS_REQUEST:
      //console.log(newArray);
      return {
        ...state,
        reloading: true,
        toast:true
      };
    case types.PUT_DATA_USER_EXCLUIDOS_SUCCESS:
      return {
        ...state,
        reloading: false,
        error: false,
        toast:false
      };
    case types.PUT_DATA_USER_EXCLUIDOS_FAILURE:
      return {
        ...state,
        reloading: false,
        error: action.payload,
        toast:false
      };
      //=================================================================
    case types.DELETE_DATA_USER_EXCLUIDOS_REQUEST:
      //console.log(newArray);
      return {
        ...state,
        reloading: true,
        toast:true
      };
    case types.DELETE_DATA_USER_EXCLUIDOS_SUCCESS:
      return {
        ...state,
        reloading: false,
        error: false,
        toast:false
      };
    case types.DELETE_DATA_USER_EXCLUIDOS_FAILURE:
      return {
        ...state,
        reloading: false,
        error: action.payload,
        toast:false
      };

    default: return state
  }
};
