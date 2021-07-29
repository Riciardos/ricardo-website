import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WheatlyOTron from './WheatleyOTron';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: '80%',
      margin: 'auto',
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function Main() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <WheatlyOTron/>
      </Grid>
      <Grid item xs={12}>
        <WheatlyOTron/>
      </Grid>
    </Grid>
  );
}

export default Main;