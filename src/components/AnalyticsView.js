import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const containerStyle = {
  flexBasis: '33%',
  maxWidth: '33%',
  height: '500px',
};

const useStyles = makeStyles((theme) => ({
  div: {
    border: '1px solid black',
  },
}));

export default function AnalyticsView() {
  const classes = useStyles();


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignContent:'center'}}>
      <div className={classes.div} style={containerStyle}>a</div>
      <div className={classes.div} style={containerStyle}>b</div>
      <div className={classes.div} style={containerStyle}>c</div>
    </div>
  );
}
