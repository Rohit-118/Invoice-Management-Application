import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  textField: {
    width: '24%',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    fetch('http://localhost:8081/h2h_milestone_3/AddServlet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));



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

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="customerOrderId"
          label="CUSTOMER ORDER ID"
          variant="outlined"
          value={formValues.customerOrderId}
          onChange={handleInputChange}
          className={classes.textField}
        />
        <TextField
          id="salesOrg"
          label="SALES ORG"
          variant="outlined"
          value={formValues.salesOrg}
          onChange={handleInputChange}
          className={classes.textField}
        />
        <TextField
          id="distributionChannel"
          label="DISTRIBUTION CHANNEL"
          variant="outlined"
          value={formValues.distributionChannel}
          onChange={handleInputChange}
          className={classes.textField}
          style={{ width: '49%' }}
        />
        <TextField
          id="customerNumber"
          label="CUSTOMER NUMBER"
          variant="outlined"
          value={formValues.customerNumber}
          onChange={handleInputChange}
          className={classes.textField}
        />
        <TextField
          id="companyCode"
          label="COMPANY CODE"
          variant="outlined"
          value={formValues.companyCode}
          onChange={handleInputChange}
          className={classes.textField}
        />
        <TextField
          id="orderCurrency"
          label="ORDER CURRENCY"
          variant="outlined"
          value={formValues.orderCurrency}
          onChange={handleInputChange}
          className={classes.textField}
          style={{ width: '16%' }}

        />
        <TextField
          id="amountInUsd"
          label="AMOUNT IN USD"
          variant="outlined"
          value={formValues.amountInUsd}
          onChange={handleInputChange}
          className={classes.textField}
          style={{ width: '15%' }}
        />
        <TextField
          id="orderCreationDate"
          label="ORDER CREATION DATE"
          variant="outlined"
          value={formValues.orderCreationDate}
          onChange={handleInputChange}
          className={classes.textField}
          style={{ width: '16%' }}
        />
        <Button type="submit" variant="contained" className={classes.button} >ADD</Button>
        <Button variant="contained" onClick={handleClear} className={classes.button}>CLEAR DATA</Button>
      </form>
    </div>
  );
}
