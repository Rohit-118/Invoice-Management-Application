import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
const rows = [
    { id: 1, CustomerOrderID: "754349803", SalesOrg:3911, DistributionChannel: "United Arab Emirates", ComapanyCode:3290 , OrderCreationDate:"01-01-2022",OrderAmount:1405.54,OrderCurrency:"AED",CustomerNumber:1210499770 },
]
const SearchedData = (props) => {
  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%', flexGrow: 1 }}>
                <DataGrid
                    rows={props.searchResults}
                    columns={columns}
                
                    
                    checkboxSelection
                    disableSelectionOnClick
                    pagination

                    />
                    </div>
        </div>
    </>
  )
}

const columns = [
    { field: 'id', headerName: 'SL No', width: 110 },
    { field: 'customerOrderID', headerName: 'Customer Order ID', width: 170 },
    { field: 'salesOrg', headerName: 'Sales Org', width: 130 },
    { field: 'distributionChannel', headerName: 'Distribution Channel', width: 200 },
    { field: 'companyCode', headerName: 'Company Code', width: 130 },
    { field: 'orderCreationDate', headerName: 'Order Creating Date', width: 180 },
    { field: 'orderAmount', headerName: 'Order Amount', type: 'number', width: 150 },
    { field: 'orderCurrency', headerName: 'Order Currency', width: 150 },
    { field: 'customerNumber', headerName: 'Customer Number', width: 160 },
    { field: 'amountInUsd', headerName: 'Amount in USD', type: 'number', width: 150 },
];
export default SearchedData