import React from 'react';
import Grid from '@material-ui/core/Grid';
import WelcomeMessage from './WelcomeMessage';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 'auto',
      width: '50%',
    },
    item: {
      margin: 'auto',
    },
    avatar: {
      color: '#61dafb',
      float: 'left',
    }
  }));

function TopGrid() {
  const classes = useStyles();
  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item xs className={classes.item}>
        <Avatar className={classes.avatar} alt="Ricardo Schuller" src="https://avatars.githubusercontent.com/u/12792646?v=4">RS</Avatar>
        <p className={classes.avatar}>Ricardo Schuller (Bottomless Creations)</p>
      </Grid>
      <Grid item xs>
        <WelcomeMessage/>
      </Grid>
    </Grid>

  );
}

export default TopGrid;