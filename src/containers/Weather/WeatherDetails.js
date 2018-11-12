import React from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import withLoader from '../../hocs/withLoader';
import withError from '../../hocs/withError';
import WeatherInfo from './WeatherInfo';
import WeatherMap from './WeatherMap';
import Subtitle from '../../components/app/Subtitle';

class WeatherDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    // INTERVAL TO UPDATE TIME.
    setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  render() {
    const { data } = this.props;
    const { currentTime } = this.state;

    return (
      data
        ? (
          <Grid container>
            <Grid item xs={12} md={12}>
              <Subtitle label={`Current weather: ${data.name} - ${moment(currentTime).format('DD/MM/YYYY HH:mm:ss')} `} />
            </Grid>
            <Grid item xs={12} md={7}>
              {/* COMPONENT TO SHOW WHEATHER INFORMATION */}
              <WeatherInfo data={data} />
            </Grid>
            <Grid item xs={12} md={5}>
              {/* COMPONENT TO SHOW MAP DATA */}
              <WeatherMap data={data} />
            </Grid>
          </Grid>
        )
        : null
    );
  }
}

WeatherDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(
  withLoader(),
  withError(),
)(WeatherDetails);
