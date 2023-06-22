import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { TablePagination } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Delete from './modal/Delete';


const columns = [
  { field: 'slNo', headerName: 'SL No', width: 110 },
  { field: 'customerOrderId', headerName: 'Customer Order ID', width: 170 },
  { field: 'salesOrg', headerName: 'Sales Org', width: 130 },
  { field: 'distributionChannel', headerName: 'Distribution Channel', width: 200 },
  { field: 'companyCode', headerName: 'Company Code', width: 130 },
  { field: 'orderCreatingDate', headerName: 'Order Creating Date', width: 180 },
  { field: 'orderAmount', headerName: 'Order Amount', type: 'number', width: 150 },
  { field: 'orderCurrency', headerName: 'Order Currency', width: 150 },
  { field: 'customerNumber', headerName: 'Customer Number', width: 160 },
  { field: 'amountInUSD', headerName: 'Amount in USD', type: 'number', width: 150 },
];
const rows = [
  {
    id: 1,
    slNo: 1,
    customerOrderId: 946851639,
    salesOrg: 3537,
    distributionChannel: 'United States of America',
    companyCode: 3220,
    orderCreatingDate: 1640995200000,
    orderAmount: 954.61,
    orderCurrency: 'EUR',
    customerNumber: 12311807,
    amountInUSD: 1030.9788,
  },
  {
    id: 2,
    slNo: 2,
    customerOrderId: 963432061,
    salesOrg: 3449,
    distributionChannel: 'Martinique',
    companyCode: 3220,
    orderCreatingDate: 1640995200000,
    orderAmount: 787.36,
    orderCurrency: 'EUR',
    customerNumber: 12311807,
    amountInUSD: 850.3488,
  },
  {
    id: 3,
    slNo: 3,
    customerOrderId: 971991639,
    salesOrg: 3238,
    distributionChannel: 'Moldova',
    companyCode: 3260,
    orderCreatingDate: 1640995200000,
    orderAmount: 67493.46,
    orderCurrency: 'EUR',
    customerNumber: 12118758,
    amountInUSD: 72892.9368,
  },
  {
    id: 4,
    slNo: 4,
    customerOrderId: 754349803,
    salesOrg: 3911,
    distributionChannel: 'United Arab Emirates',
    companyCode: 3290,
    orderCreatingDate: 1640995200000,
    orderAmount: 1405.54,
    orderCurrency: 'EUR',
    customerNumber: 1210499770,
    amountInUSD: 1517.9832,
  },
  {
    id: 5,
    slNo: 5,
    customerOrderId: 819741436,
    salesOrg: 3605,
    distributionChannel: 'Argentina',
    companyCode: 3290,
    orderCreatingDate: 1640995200000,
    orderAmount: 1065.33,
    orderCurrency: 'EUR',
    customerNumber: 1210124309,
    amountInUSD: 1150.5564,
  },
  {
    id: 6,
    slNo: 6,
    customerOrderId: 881355361,
    salesOrg: 3645,
    distributionChannel: 'Armenia',
    companyCode: 3470,
    orderCreatingDate: 1641081600000,
    orderAmount: 302.85,
    orderCurrency: 'EUR',
    customerNumber: 12311152,
    amountInUSD: 327.078,
  },
  {
    id: 7,
    slNo: 7,
    customerOrderId: 821659852,
    salesOrg: 2470,
    distributionChannel: 'United States of America',
    companyCode: 3220,
    orderCreatingDate: 1641081600000,
    orderAmount: 8380.69,
    orderCurrency: 'EUR',
    customerNumber: 1230021722,
    amountInUSD: 9051.1452,
  },
  {
    id: 8,
    slNo: 8,
    customerOrderId: 957194828,
    salesOrg: 3150,
    distributionChannel: 'United States Minor Outlying Islands',
    companyCode: 3290,
    orderCreatingDate: 1641081600000,
    orderAmount: 545.85,
    orderCurrency: 'EUR',
    customerNumber: 1210183107,
    amountInUSD: 589.518,
  },
  {
    id: 9,
    slNo: 9,
    customerOrderId: 946851639,
    salesOrg: 3537,
    distributionChannel: 'United States of America',
    companyCode: 3220,
    orderCreatingDate: 1640995200000,
    orderAmount: 954.61,
    orderCurrency: 'EUR',
    customerNumber: 12311807,
    amountInUSD: 1030.9788,
  },
  {
    id: 10,
    slNo: 10,
    customerOrderId: 963432061,
    salesOrg: 3449,
    distributionChannel: 'Martinique',
    companyCode: 3220,
    orderCreatingDate: 1640995200000,
    orderAmount: 787.36,
    orderCurrency: 'EUR',
    customerNumber: 12311807,
    amountInUSD: 850.3488,
  },
  {
    id: 11,
    slNo: 11,
    customerOrderId: 971991639,
    salesOrg: 3238,
    distributionChannel: 'Moldova',
    companyCode: 3260,
    orderCreatingDate: 1640995200000,
    orderAmount: 67493.46,
    orderCurrency: 'EUR',
    customerNumber: 12118758,
    amountInUSD: 72892.9368,
  },
  {
    id: 12,
    slNo: 12,
    customerOrderId: 754349803,
    salesOrg: 3911,
    distributionChannel: 'United Arab Emirates',
    companyCode: 3290,
    orderCreatingDate: 1640995200000,
    orderAmount: 1405.54,
    orderCurrency: 'EUR',
    customerNumber: 1210499770,
    amountInUSD: 1517.9832,
  },
  {
    id: 13,
    slNo: 13,
    customerOrderId: 819741436,
    salesOrg: 3605,
    distributionChannel: 'Argentina',
    companyCode: 3290,
    orderCreatingDate: 1640995200000,
    orderAmount: 1065.33,
    orderCurrency: 'EUR',
    customerNumber: 1210124309,
    amountInUSD: 1150.5564,
  },
  {
    id: 14,
    slNo: 14,
    customerOrderId: 881355361,
    salesOrg: 3645,
    distributionChannel: 'Armenia',
    companyCode: 3470,
    orderCreatingDate: 1641081600000,
    orderAmount: 302.85,
    orderCurrency: 'EUR',
    customerNumber: 12311152,
    amountInUSD: 327.078,
  },
  {
    id: 15,
    slNo: 15,
    customerOrderId: 821659852,
    salesOrg: 2470,
    distributionChannel: 'United States of America',
    companyCode: 3220,
    orderCreatingDate: 1641081600000,
    orderAmount: 8380.69,
    orderCurrency: 'EUR',
    customerNumber: 1230021722,
    amountInUSD: 9051.1452,
  },
  {
    id: 16,
    slNo: 16,
    customerOrderId: 957194828,
    salesOrg: 3150,
    distributionChannel: 'United States Minor Outlying Islands',
    companyCode: 3290,
    orderCreatingDate: 1641081600000,
    orderAmount: 545.85,
    orderCurrency: 'EUR',
    customerNumber: 1210183107,
    amountInUSD: 589.518,
  },
];





const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function DataFace() {
  const [pageSize, setPageSize] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const classes = useStyles();

  const handleDelete = () => {
    // Perform the delete operation
    // ...
  };

  const handleDeleteClick = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows.slice(page * pageSize, page * pageSize + pageSize)}
            columns={columns}
            pageSize={pageSize}
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            checkboxSelection
            disableSelectionOnClick
            pagination
            components={{
              Footer: ({ paginationProps }) => (
                <div className="MuiDataGrid-footerContainer" style={{ background: '#5C6BC0' }}>
                  <div>
                    <Button variant="contained" color="primary" className={classes.button}>REFRESH DATA</Button>
                    <Button variant="contained" color="primary" className={classes.button}>EDIT</Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleDeleteClick}>DELETE</Button>
                    <Button variant="contained" color="primary" className={classes.button}>PREDICT</Button>
                  </div>
                  <div className="MuiTablePagination-root">
                    <TablePagination
                      {...paginationProps}
                      rowsPerPageOptions={[5, 10, 20, 50, 100]}
                      count={rows.length}
                      rowsPerPage={pageSize}
                      page={page}
                      onPageChange={(e, newPage) => setPage(newPage)}
                      onRowsPerPageChange={(e) => {
                        setPageSize(+e.target.value);
                      }}

                    />
                  </div>
                </div>
              ),
            }}
          />
        </div>
      </div>
      <Delete open={deleteOpen} onClose={handleDeleteClose} onDelete={handleDelete} />
    </div>
  );
}


// class="MuiDataGrid-footerContainer"
// class="MuiTablePagination-root"