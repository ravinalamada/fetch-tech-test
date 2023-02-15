import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./";

export function fetchCompaniesData() {
  return (dispatch: (arg0: any) => void) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "http://localhost:4000/companies"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}
