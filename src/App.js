import React from 'react';
import { Grid, Paper, withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import Title from './components/app/Title';
import WeatherContainer from './containers/Weather/WeatherContainer';

const styles = {
  content: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    boxShadow: 'none',
  },
};

const App = ({ classes }) => (
  <Grid container>
    <Grid item xs={12}>
      <Paper className={classes.content}>
        <Title label="Weather" />
        <WeatherContainer />
      </Paper>
    </Grid>
  </Grid>
);

App.propTypes = {
  classes: PropTypes.object,
};

export default compose(
  withStyles(styles),
)(App);
