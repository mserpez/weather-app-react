import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.primary.grey,
  },
});

class TabNav extends React.Component {

  handleChange = (event, value) => {
    const {navigate} = this.props;
    navigate(value);
  };

  render() {
    const { classes, currentNav } = this.props;

    return (
      <BottomNavigation value={currentNav} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      </BottomNavigation>
    );
  }
}

TabNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabNav);
