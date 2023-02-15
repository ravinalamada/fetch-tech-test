import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { DataGrid} from "@mui/x-data-grid";
import { fetchCompaniesData } from "../actions/fetchData";
import { INITIALE_STATE } from "../types";
import { columns } from "../constant";

const CompaniesList = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state : { companiesData: INITIALE_STATE }) => state.companiesData.companies);
  const loading = useSelector((state: { companiesData: INITIALE_STATE }) => state.companiesData.loading);
  
  useEffect(() => {
    dispatch(fetchCompaniesData());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
        <DataGrid
          rows={companies}
          columns={columns}
          pageSize={10}
          style={styles}
          loading={loading}
          disableColumnFilter
        />
    </>
  )
}

export default CompaniesList

const styles = {
  height: 631,
  width: 1052,
  marginInline: "auto",
  marginBlockStart: 60
}