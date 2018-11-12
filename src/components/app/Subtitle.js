import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

const styles = theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: 25,
    textAlign: 'left',
    textTransform: 'uppercase',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.primary.main,
    borderBottomStyle: 'solid',
  },
});

const Title = ({ classes, label }) => <h1 className={classes.title}>{label}</h1>;

Title.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles),
)(Title);
