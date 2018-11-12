import React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { connect } from 'react-redux';
import { selectors } from '@yuniku/make-request';

const withLoader = () => compose(
  connect(state => ({
    hasError: selectors.serviceThrowError(state),
    errorInfo: selectors.getServiceError(state),
  })),
  branch(
    props => props.hasError,
    renderComponent(
      props => (
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            textTransform: 'capitalize',
            backgroundColor: '#2196f3',
            padding: 20,
            width: '40%',
            margin: '0 auto',
            marginTop: 100,
          }}
        >
          {`${props.errorInfo.body} :(`}
        </div>
      ),
    ),
  ),
);

export default withLoader;
