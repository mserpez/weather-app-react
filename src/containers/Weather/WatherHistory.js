import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import DeleteIcon from '@material-ui/icons/Close';
import { getWeatherHistoryData } from './selectors';
import { removeHistory, getWeatherData } from './actions';

const styles = theme => ({
  container: {
    marginTop: 10,
  },
  boxItem: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.primary.grey,
    marginBottom: 1,
    marginTop: 1,
  },
  boxLabel: {
    textTransform: 'uppercase',
    paddingLeft: 10,
    flex: 1,
    cursor: 'pointer',
  },
  'boxLabel::hover': {
    display: 'none',
  },
  boxEmpty: {
    textTransform: 'uppercase',
    paddingLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  boxDelete: {
    textTransform: 'uppercase',
    cursor: 'pointer',
    flex: 1,
    textAlign: 'right',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const WeatherHistory = ({
  removeHistoryAction, getWeatherDataAction, weatherHistoryData, classes,
}) => (
  <div className={classes.container}>
    <Grid container>
      {/* TODO: MOVE TO NEW ITEM COMPONENT */}
      {
        weatherHistoryData.length > 0 ? weatherHistoryData.map((item, idx) => (
          <Grid item xs={12} key={idx}>
            <div className={classes.boxItem}>
              <p className={classes.boxLabel} onClick={() => getWeatherDataAction(item.name, false)}>{item.name}</p>
              <p className={classes.boxDelete} onClick={() => removeHistoryAction(item.id)}>
                <DeleteIcon />
              </p>
            </div>
          </Grid>
        )) : (
          <Grid item xs={12}>
            <div className={classes.boxItem}>
              <p className={classes.boxEmpty}>History empty</p>
            </div>
          </Grid>
        )
        }
    </Grid>
  </div>
);


WeatherHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  removeHistoryAction: PropTypes.func.isRequired,
  getWeatherDataAction: PropTypes.func.isRequired,
  weatherHistoryData: PropTypes.array,
};

const mapStateToProps = state => ({
  weatherHistoryData: getWeatherHistoryData(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  removeHistoryAction: removeHistory,
  getWeatherDataAction: getWeatherData,
}, dispatch);

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(WeatherHistory);
