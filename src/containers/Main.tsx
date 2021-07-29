import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from '@material-ui/core';

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
        <Grid container spacing={2} direction={'column'}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>What will happen if I put this here?</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;