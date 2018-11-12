import React from 'react';
import { compose } from 'recompose';
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Subtitle from '../../components/app/Subtitle';

const styles = theme => ({
  boxItem: {
    backgroundColor: theme.palette.primary.grey,
    textAlign: 'center',
    padding: 30,
    margin: 1,
  },
  boxLabel: {
    color: theme.palette.primary.main,
    fontSize: 25,
  },
  boxValue: {
    color: theme.palette.primary.black,
    fontSize: 20,
    fontWeight: '700',
  },
});

const WeatherInfo = ({ data, classes }) => (
  <React.Fragment>
    {/*TODO: CREATE COMPONENT TO AVOID REPEAT CODE*/}
    {/*TODO: CREATE CONTANTS FOR ITEMS NAME.*/}
    <Grid container>
      <Grid item xs={12} md={4}>
        <div className={classes.boxItem}>
          <p className={classes.boxLabel}>Temperature</p>
          <p className={classes.boxValue}>{`${data.main.temp} °F`}</p>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.boxItem}>
          <p className={classes.boxLabel}>Pressure</p>
          <p className={classes.boxValue}>{`${data.main.pressure} Hpa`}</p>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.boxItem}>
          <p className={classes.boxLabel}>Humidity</p>
          <p className={classes.boxValue}>{`${data.main.humidity} %`}</p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.boxItem}>
          <p className={classes.boxLabel}>Max temperature</p>
          <p className={classes.boxValue}>{`${data.main.temp_max} °F`}</p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.boxItem}>
          <p className={classes.boxLabel}>Min temperature</p>
          <p className={classes.boxValue}>{`${data.main.temp_min} °F`}</p>
        </div>
      </Grid>
    </Grid>
  </React.Fragment>
);

WeatherInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(WeatherInfo);
