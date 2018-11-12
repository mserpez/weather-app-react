import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} from 'google-maps-react';

const styles = theme => ({
  container: {
    margin: 10,
    maxWidth: '100%',
  },
});

const WeatherMap = ({ classes, google, data }) => (
  <iframe
    width="600"
    height="450"
    frameBorder="0"
    src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAS56ZA-2EgCrrOYur8GG0nTdxRb4oj6XQ=Space+Needle,Seattle+WA"}
  >
  </iframe>
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
