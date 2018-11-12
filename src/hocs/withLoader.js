import React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { selectors } from '@yuniku/make-request';

const withLoader = () => compose(
  connect(state => ({
    isLoading: selectors.serviceIsLoading(state),
  })),
  branch(
    props => props.isLoading,
    renderComponent(
      (props) => <div style={{textAlign: 'center', marginTop: 100}}>LOADING...</div>,
    ),
  ),
);

export default withLoader;
