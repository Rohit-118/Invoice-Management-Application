import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Button: {
        margin: theme.spacing(1),
        width: '155px',
    },
}));

export default function Delete({ open, onClose, onDelete }) {
    const classes = useStyles();


    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Record?</DialogTitle>
            <DialogContent>Are you sure you want to delete this record?</DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={onClose} className={classes.Button}>
                    Cancel
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDelete} className={classes.Button}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
