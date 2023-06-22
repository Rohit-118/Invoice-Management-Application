import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TablePagination } from '@material-ui/core';
import { orange } from '@mui/material/colors';
import Delete from './modal/Delete';
import Edit from './modal/Edit';

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

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        background: orange[500],
    },
    tableContainer: {
        backgroundColor: 'gray',
        '& .MuiDataGrid-cell': {
            color: 'white',
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-footerContainer': {
            color: 'white',
        },
        '& .MuiDataGrid-checkboxInput.Mui-checked': {
            color: orange[500],
        },
        '& .MuiDataGrid-cellCheckbox .MuiDataGrid-checkboxInput': {
            color: orange[500],
        },
        '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-checkboxInput': {
            color: orange[500],
        },
    },
}));

export default function DataFaceDynamic() {
    const [pageSize, setPageSize] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [selectedColumns, setSelectedColumns] = React.useState([]);
    const classes = useStyles();

    useEffect(() => {

        fetch('http://localhost:8081/h2h_milestone_3/ReadServlet')
            .then((response) => response.json())
            .then((json) => {
                // Modify the rows array to include 'id' field by incrementing and mapping with 'customer_id'
                const modifiedData = json.map((row, index) => ({
                    ...row,
                    id: index + 1, // Incrementing the index to create the 'id' value
                }));
                setRows(modifiedData);
            })
            .catch((error) => console.log(error));
    }, []);

    const extractIdToCustomerOrderID = (id) => {
        const row = rows.find((row) => row.id === id);
        return row.customerOrderID;
    };

    const handleRefreshClick = () => {
        fetch('http://localhost:8081/h2h_milestone_3/ReadServlet')
            .then((response) => response.json())
            .then((json) => {
                // Modify the rows array to include 'id' field by incrementing and mapping with 'customer_id'
                const modifiedData = json.map((row, index) => ({
                    ...row,
                    id: index + 1, // Incrementing the index to create the 'id' value
                }));
                setRows(modifiedData);
            })
            .catch((error) => console.log(error));
    };

    const columnNames = {
        orderCurrency: 'Order Currency',
        companyCode: 'Company Code',
        distributionChannel: 'Distribution Channel',
    };
    const extractAllColumnData = (id) => {
        const row = rows.find((row) => row.id === id);
        return row;
    };
    const handleEdit = (updatedValues) => {
        console.log(extractIdToCustomerOrderID(selectedColumns[0]));
        console.log(updatedValues);
        const data = extractAllColumnData(selectedColumns[0]);
        console.log(data);
        fetch(`http://localhost:8081/h2h_milestone_3/EditServlet?amountInUsd=${data.amountInUsd}&companyCode=${updatedValues.companyCode}&creditControlArea=${data.creditControlArea}&creditStatus=${data.creditStatus}&customerNumber=${data.customerNumber}&customerOrderID=${data.customerOrderID}&distributionChannel=${updatedValues.distributionChannel}&division=${data.division}&orderAmount=${data.orderAmount}&orderCreationDate=${data.orderCreationDate}&orderCreationTime=${data.orderCreationTime}&orderCurrency=${updatedValues.orderCurrency}&purchaseOrderType=${data.purchaseOrderType}&releasedCreditValue=${data.releasedCreditValue}&requestedDeliveryDate=${data.requestedDeliveryDate}&salesOrg=${data.salesOrg}&slNo=${data.slNo}&soldToParty=${data.soldToParty}&uniqueCustNumber=${data.uniqueCustNumber}`,
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => {
                // Check if the request was sent successfully
                if (response.ok) {
                    console.log('Request sent successfully');
                } else {
                    console.log('Request encountered an error');
                }
            }
            )
            .catch((error) => console.log(error));
    };
    const handleEditClick = () => {
        setEditOpen(true);
    };
    const handleEditClose = () => {
        setEditOpen(false);
    };

    const handleDelete = () => {
        selectedColumns.forEach((columnId) => {
            console.log(extractIdToCustomerOrderID(columnId));
            fetch(`http://localhost:8081/h2h_milestone_3/DeleteServlet?customerOrderID=${extractIdToCustomerOrderID(columnId)}`,
                {
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then((response) => {
                    // Check if the request was sent successfully
                    if (response.ok) {
                        console.log('Request sent successfully');
                    } else {
                        console.log('Request encountered an error');
                    }
                })
                .catch((error) => console.log(error));
        });
    };
    const handleDeleteClick = () => {
        setDeleteOpen(true);
    };
    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%', flexGrow: 1 }}>
                <DataGrid
                    rows={rows.slice(page * pageSize, page * pageSize + pageSize)}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    onSelectionModelChange={(ids) => {
                        setSelectedColumns(ids)
                        console.log(ids)
                    }}
                    checkboxSelection
                    disableSelectionOnClick
                    pagination
                    components={{
                        Footer: (paginationProps) => (
                            <div className="MuiDataGrid-footerContainer" style={{ background: '#676667' }}>
                                <div>
                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleRefreshClick}>REFRESH DATA</Button>
                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleEditClick} disabled={selectedColumns.length !== 1}>EDIT</Button>
                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleDeleteClick} disabled={selectedColumns.length < 1}>DELETE</Button>
                                    <Button variant="contained" color="primary" className={classes.button}>PREDICT</Button>
                                </div>
                                <div className="MuiTablePagination-root">
                                    <TablePagination
                                        {...paginationProps}
                                        rowsPerPageOptions={[5, 10, 20, 50, 100]}
                                        count={rows.length}
                                        rowsPerPage={pageSize}
                                        page={page}
                                        onPageChange={(event, newPage) => {
                                            setPage(newPage);
                                        }}
                                        onRowsPerPageChange={(event) => {
                                            setPageSize(+event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        ),
                    }}
                />
            </div>
            <Edit open={editOpen} onClose={handleEditClose} onEdit={handleEdit} columnNames={columnNames} disabled={selectedColumns.length !== 1} />
            <Delete open={deleteOpen} onClose={handleDeleteClose} onDelete={handleDelete} disabled={selectedColumns.length < 1} />
        </div>
    );
}



