import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} from 'google-maps-react';

const styles = theme => ({
  container: {
    background: theme.palette.primary.grey,
    maxWidth: '100%',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const WeatherMap = ({ classes, google, data }) => (
  <div className={classes.container}>
    TODO MAP
  </div>
);

WeatherMap.propTypes = {
  classes: PropTypes.object.isRequired,

};

const LoadingContainer = props => (
  <div>Fancy loading container!</div>
);

export default compose(
  withStyles(styles),
)(WeatherMap);
