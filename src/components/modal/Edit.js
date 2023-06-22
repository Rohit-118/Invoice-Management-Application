import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: theme.spacing(1),
        height: ""
    },
    Button: {
        margin: theme.spacing(2),
        width: '260px',
    },
}));

export default function Edit({ open, onClose, onEdit, columnNames }) {
    const classes = useStyles();
    const [formValues, setFormValues] = useState({
        orderCurrency: '',
        companyCode: '',
        distributionChannel: '',
    });

    const handleEdit = () => {
        onEdit(formValues);
        onClose();
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit</DialogTitle>
            <DialogContent>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="orderCurrency"
                        label={columnNames.orderCurrency}
                        variant="outlined"
                        value={formValues.orderCurrency}
                        className={classes.textField}
                        style={{ width: '45%', marginRight: '9px' }}
                        onChange={handleInputChange} // Add onChange event handler
                    />
                    <TextField
                        id="companyCode"
                        label={columnNames.companyCode}
                        variant="outlined"
                        value={formValues.companyCode}
                        className={classes.textField}
                        style={{ width: '49%' }}
                        onChange={handleInputChange} // Add onChange event handler
                    />
                    <TextField
                        id="distributionChannel"
                        label={columnNames.distributionChannel}
                        variant="outlined"
                        value={formValues.distributionChannel}
                        className={classes.textField}
                        style={{ width: '96%' }}
                        onChange={handleInputChange} // Add onChange event handler
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleEdit} className={classes.Button}>
                    EDIT
                </Button>
                <Button variant="contained" onClick={onClose} className={classes.Button}>
                    CANCEL
                </Button>
            </DialogActions>
        </Dialog>
    );
}
