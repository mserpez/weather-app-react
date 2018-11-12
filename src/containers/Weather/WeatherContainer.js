import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid, withStyles } from '@material-ui/core';
import WeatherForm from './WeatherForm';
import WeatherNavigation from './WeatherNavigation';
import {NAVIGATION_TABS} from './constants';
import WeatherHistory from './WatherHistory';
import {getWeatherData} from './selectors';
import connect from 'react-redux/es/connect/connect';
import WeatherDetails from './WeatherDetails';

const styles = {
  navContent: {
    margin: 20,
  },
};

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: NAVIGATION_TABS.SEARCH
    };
  }

  changeSelectedNav = (nav) => {
    this.setState({selectedNav: nav});
  }

  render() {
    const {classes, weatherData} = this.props;

    return (
      <Grid container>
        <Grid item xs={12} md={3}>
          <div className={classes.navContent}>
            <WeatherNavigation navigate={this.changeSelectedNav} currentNav={this.state.selectedNav}/>
            {
              this.state.selectedNav === NAVIGATION_TABS.SEARCH ?
                <WeatherForm /> : <WeatherHistory/>
            }
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <WeatherDetails data={weatherData} />
        </Grid>
      </Grid>
    );
  }
}

WeatherContainer.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({
  weatherData: getWeatherData(state),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(WeatherContainer);
