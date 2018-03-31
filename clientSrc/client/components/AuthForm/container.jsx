import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthForm from './index';

function getErrorText(error) {
  const errorMessages = {
    500: 'messages.serverError.defaultMessage',
    400: 'messages.incorrectCredentials.defaultMessage',
  };

  return error ? errorMessages[error.statusCode] : '';
}

class AuthFormContainer extends PureComponent {
  render() {
    const {
      isFetching,
      onSubmit,
      error,
      // username,
      // password,
    } = this.props;

    return (
      <AuthForm
        error={getErrorText(error)}
        isFetching={isFetching}
        onSubmit={onSubmit}
      />
    );
  }
}

AuthFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.shape({
    statusCode: PropTypes.number,
  }),
  // username: PropTypes.string,
  // password: PropTypes.string,
};

AuthFormContainer.defaultProps = {
  isFetching: false,
  error: null,
  // username: '',
  // password: '',
};

const mapStateToProps = ({ auth }) => ({
  // username: auth.authForm.username,
  // password: auth.authForm.password,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthFormContainer);