import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));



const Categories = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>

        <Grid item xs={4}>
          <Paper className={classes.paper}>All Categories</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}> Data</Paper>
        </Grid>
      </Grid>

    </div>
  )
}

export default Categories
