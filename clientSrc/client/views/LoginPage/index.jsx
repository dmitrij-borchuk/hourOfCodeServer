import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/auth';
import AuthForm from '../../components/AuthForm/container';

export class LoginPage extends React.PureComponent {
  onSubmit(data) {
    const {
      onSubmit,
      history,
    } = this.props;
    console.log(data);

    onSubmit(data).then(() => history.push('/'));
  }

  render() {
    return (
      <div>
        <AuthForm
          onSubmit={data => this.onSubmit(data)}
          isFetching={this.props.isFetching}
          error={this.props.error}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.shape({
    statusCode: PropTypes.number,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

LoginPage.defaultProps = {
  isFetching: false,
  error: null,
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(credentials) {
      return dispatch(login(credentials));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
