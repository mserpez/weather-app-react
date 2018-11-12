import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
});


class MuiTextField extends React.Component {
  render() {
    const {
      label, classes, input: { name, value, onChange }, meta: { error, pristine },
    } = this.props;

    return (
      <TextField
        name={name}
        error={error && pristine}
        label={label}
        className={classes.textField}
        margin="normal"
        onChange={onChange}
        value={value}
      />
    );
  }
}

MuiTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(MuiTextField);
