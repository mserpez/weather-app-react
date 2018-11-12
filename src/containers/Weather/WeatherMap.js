import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAPS_KEY } from '../../constants';

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

    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
      defaultCenter={{
        lat: data.coord.lat,
        lng: data.coord.lon,
      }}
      defaultZoom={10}
    />
  </div>
);

WeatherMap.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default compose(
  withStyles(styles),
)(WeatherMap);
