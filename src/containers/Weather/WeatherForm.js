import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid, withStyles, Button } from '@material-ui/core';
import { Field, Form, reduxForm, formValueSelector } from 'redux-form';
import { NAME } from './constants';
import TextField from '../../components/form/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getWeatherData} from './actions';

const styles = theme => ({
  container: {
    background: theme.palette.primary.grey,
    padding: 10,
    marginTop: 10,
  },
});

const formSelector = formValueSelector(NAME);

class WeatherForm extends React.Component {

  submitForm = () => {
    const { getWeatherDataAction, formValueCity } = this.props;

    getWeatherDataAction(formValueCity);
  }

  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <div className={classes.container}>
        <Form onSubmit={this.submitForm}>
          <Grid container>
            <Grid item xs={12}>
              <Field name="city" component={TextField} label="Select City..." />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Search</Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  classes: PropTypes.object.isRequired,
  getWeatherDataAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  formValueCity: formSelector(state, 'city'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeatherDataAction: getWeatherData,
}, dispatch);

export default compose(
  reduxForm({ form: NAME, enableReinitialize : true }),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(WeatherForm);
