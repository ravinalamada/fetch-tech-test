import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, } from "../constant";
import { COMPANY } from "../types";
  
  export function fetchDataRequest() {
    return {
      type: FETCH_DATA_REQUEST
    };
  }
  
  export function fetchDataSuccess(companies: COMPANY) {
    return {
      type: FETCH_DATA_SUCCESS,
      companies
    };
  }
  
  export function fetchDataError(error: string) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
  }