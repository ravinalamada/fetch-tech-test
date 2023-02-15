import { combineReducers } from "redux";
import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../constant";
import { COMPANY, INITIALE_STATE } from "../types";


let initialState = {
    loading: false,
    companies: [],
    error: null
  };
  
  function companiesData(state: INITIALE_STATE = initialState, action: { type: string; companies: COMPANY[]; payload: { error: any; }; }) {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          companies: action.companies
        };
      case FETCH_DATA_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          companies: []
        };
      default:
        return state;
    }
  }
  export default combineReducers({
    companiesData
  });