import { GridColDef } from "@mui/x-data-grid";

// Should be moved to a constant file
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const columns: GridColDef[] = [
    { field: 'name', headerName: 'NAME', width: 150 },
    { field: 'description', headerName: 'DESCRIPTION', width: 300, sortable: false },
    { field: 'sector', headerName: 'SECTOR', width: 150, sortable: false },
    { field: 'address', headerName: 'ADDRESS', width: 150, sortable: false },
    { field: 'postcode', headerName: 'POSTCODE', width: 150, sortable: false },
    { field: 'property_size', headerName: 'PROPERTY SIZE', width: 150, sortable: false },
    { field: 'lease_price', headerName: 'LEASE PRICE', width: 150, sortable: false },
  ];