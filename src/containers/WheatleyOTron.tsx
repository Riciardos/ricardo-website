import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  paper: {
    height: 140,
    width: '80%',
    margin: 'auto',
  }
}));

function WheatlyOTron() {
    const classes = useStyles();
    return (
      <Grid item>
        <Paper className={classes.paper}>Challenge Wheatley-O-Tron on Lichess here</Paper>
      </Grid>
    )
}

export default WheatlyOTron;