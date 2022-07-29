import * as types from "../../types";

const STATE = {
  usersData: [],
  loading: false,
  reloading: false,
  error: "",
  toast:false,
}

export const userDataReducer = (state = STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_DATA_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersData: action.payload,
      };
    case types.GET_DATA_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    //=================================================================
    case types.POST_DATA_USER_REQUEST:
      //console.log(newArray);
      return {
        ...state,
      };
    case types.POST_DATA_USER_SUCCESS:
      //console.log("reducer SUCCESS");
      return {
        ...state,
        reloading: !STATE.reloading,
        error: false,
        toast:false
      };
    case types.POST_DATA_USER_FAILURE:
      //console.log("FAILURE");
      //console.log(action.payload.response.data.code);
      return {
        ...state,
        error: action.payload.response.data.code,
      };
      //=================================================================
    case types.PUT_DATA_USER_REQUEST:
      //console.log(newArray);
      return {
        ...state,
        reloading: true,
        toast:true
      };
    case types.PUT_DATA_USER_SUCCESS:
      return {
        ...state,
        reloading: false,
        error: false,
        toast:false
      };
    case types.PUT_DATA_USER_FAILURE:
      return {
        ...state,
        reloading: false,
        error: action.payload,
        toast:false
      };
      //=================================================================
    case types.DELETE_DATA_USER_REQUEST:
      //console.log(newArray);
      return {
        ...state,
        reloading: true,
        toast:true
      };
    case types.DELETE_DATA_USER_SUCCESS:
      return {
        ...state,
        reloading: false,
        error: false,
        toast:false
      };
    case types.DELETE_DATA_USER_FAILURE:
      return {
        ...state,
        reloading: false,
        error: action.payload,
        toast:false
      };

    default: return state
  }
};
