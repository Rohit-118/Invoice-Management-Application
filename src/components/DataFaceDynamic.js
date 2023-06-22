import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

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

export default function DataFaceDynamic() {
    const [data, setData] = React.useState([]);
    const [pageSize, setPageSize] = React.useState(5);

    useEffect(() => {
        fetch('http://localhost:8081/h2h_milestone_3/ReadServlet')
            .then((response) => response.json())
            .then((json) => {
                const modifiedData = json.map((row) => ({
                    ...row,
                    id: row.slNo,
                }));
                setData(modifiedData);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={pageSize}
                        rowsPerPageOptions={[5, 10, 20, 50, 100]}
                        checkboxSelection
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        disableSelectionOnClick
                    />
                </div>
            </div>
        </div>
    );
}