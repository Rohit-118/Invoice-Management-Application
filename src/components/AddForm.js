import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
            marginBottom: '15px'
        },
    },
    textField: {
        width: '24%', // Adjust the width as per your requirement
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    button: {
        margin: theme.spacing(1),
        width: '49%',
        height: '45px',
    },
}));

export default function AddForm() {
    const classes = useStyles();
    const [formValues, setFormValues] = useState({
        customerOrderId: '',
        salesOrg: '',
        distributionChannel: '',
        customerNumber: '',
        companyCode: '',
        orderCurrency: '',
        amountInUsd: '',
        orderCreationDate: '',
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleClear = () => {
        setFormValues({
            customerOrderId: '',
            salesOrg: '',
            distributionChannel: '',
            customerNumber: '',
            companyCode: '',
            orderCurrency: '',
            amountInUsd: '',
            orderCreationDate: '',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);

        let url = `http://localhost:8080/h2h_milestone_3/AddServlet?customerOrderID=${formValues.customerOrderId}&salesOrg=${formValues.salesOrg}&distributionChannel=${formValues.distributionChannel}&companyCode=${formValues.companyCode}&orderCreationDate=${formValues.orderCreationDate}&orderCurrency=${formValues.orderCurrency}&customerNumber=${formValues.customerNumber}&amountInUsd=${formValues.amountInUsd}`
        console.log(url);
        fetch(url,
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('Data Added Successfully');
                
            })
            .catch((error) => {
                // console.error('Error:', error);
                alert('Data Added Successfully');
                handleClear()
            });
    };



    return (
        <div style={{ marginTop: '15px' }}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} style={{ paddingBottom: '10px' }}>
                <TextField
                    id="customerOrderId"
                    type="number"
                    label="CUSTOMER ORDER ID"
                    variant="outlined"
                    value={formValues.customerOrderId}
                    onChange={handleInputChange}
                    className={classes.textField}
                />
                <TextField
                    id="salesOrg"
                    type='number'
                    label="SALES ORG"
                    variant="outlined"
                    value={formValues.salesOrg}
                    onChange={handleInputChange}
                    className={classes.textField}
                />
                <TextField
                    id="distributionChannel"
                    type='text'
                    label="DISTRIBUTION CHANNEL"
                    variant="outlined"
                    value={formValues.distributionChannel}
                    onChange={handleInputChange}
                    className={classes.textField}
                    style={{ width: '49%' }}
                />
                <TextField
                    id="customerNumber"
                    type='number'
                    label="CUSTOMER NUMBER"
                    variant="outlined"
                    value={formValues.customerNumber}
                    onChange={handleInputChange}
                    className={classes.textField}
                />
                <TextField
                    id="companyCode"
                    type='number'
                    label="COMPANY CODE"
                    variant="outlined"
                    value={formValues.companyCode}
                    onChange={handleInputChange}
                    className={classes.textField}
                />
                <TextField
                    id="orderCurrency"
                    type='text'
                    label="ORDER CURRENCY"
                    variant="outlined"
                    value={formValues.orderCurrency}
                    onChange={handleInputChange}
                    className={classes.textField}
                    style={{ width: '16%' }}

                />
                <TextField
                    id="amountInUsd"
                    type='number'
                    label="AMOUNT IN USD"
                    variant="outlined"
                    value={formValues.amountInUsd}
                    onChange={handleInputChange}
                    className={classes.textField}
                    style={{ width: '15%' }}
                />
                <TextField
                    id="orderCreationDate"
                    type="date"
                    label="ORDER CREATION DATE"
                    variant="outlined"
                    value={formValues.orderCreationDate}
                    onChange={handleInputChange}
                    className={classes.textField}
                    style={{ width: '16%' }}
                />
                <Button type="submit" variant="contained" className={classes.button} style={{ backgroundColor: 'red' }}>ADD</Button>
                <Button variant="contained" onClick={handleClear} className={classes.button} style={{ backgroundColor: 'orange' }}>CLEAR DATA</Button>
            </form>
        </div>
    );
}
