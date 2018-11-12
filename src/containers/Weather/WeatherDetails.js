import React from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import withLoader from '../../hocs/withLoader';
import withError from '../../hocs/withError';
import WeatherInfo from './WeatherInfo';
import WeatherMap from './WeatherMap';
import Subtitle from '../../components/app/Subtitle';

const WeatherDetails = ({ data }) => (
  data ? (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Subtitle label={`Current weather: ${data.name}`} />
      </Grid>
      <Grid item xs={12} md={7}>
        <WeatherInfo data={data} />
      </Grid>
      <Grid item xs={12} md={5}>
        <WeatherMap data={data} />
      </Grid>
    </Grid>
  ) : null
);

export default compose(
  withLoader(),
  withError(),
)(WeatherDetails);
