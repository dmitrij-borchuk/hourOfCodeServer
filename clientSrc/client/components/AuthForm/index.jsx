import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { reduxForm, Field } from 'redux-form';

import { renderTextField } from '../../utils';
import Loader from '../Loader';
// import { LinkBtn } from '../../commonStyles';
import {
  Container,
  Header,
  Content,
  ContentContainer,
  // BottomLink,
} from './styles';

// import messages from './messages';


function AuthForm(props) {
  const {
    isFetching,
    handleSubmit,
    // username,
    // password,
    // usernameChanged,
    // passwordChanged,
    error,
  } = props;

  return (
    <Container>
      <Paper elevation={3} >
        <Paper elevation={1} >
          <Header>
            Login
          </Header>
        </Paper>
        <ContentContainer>
          <form onSubmit={handleSubmit}>
            <Content>
              <Field
                name="email"
                component={renderTextField}
                error={!!error}
                label="Email"
                fullWidth
                helperText={error}
                disabled={isFetching}
              />
              <Field
                name="password"
                component={renderTextField}
                type="password"
                label="Password"
                fullWidth
                disabled={isFetching}
              />
              <Button
                variant="raised"
                color="primary"
                fullWidth
                type="submit"
                disabled={isFetching}
              >
                Submit
              </Button>
              {/* <BottomLink>
                <LinkBtn href="/resetPassword">
                  Forgot password
                </LinkBtn>
              </BottomLink> */}
            </Content>
          </form>

          {isFetching &&
            <Loader />
          }
        </ContentContainer>
      </Paper>
    </Container>
  );
}

AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  // username: PropTypes.string,
  // password: PropTypes.string,
  // usernameChanged: PropTypes.func,
  // passwordChanged: PropTypes.func,
};

AuthForm.defaultProps = {
  isFetching: false,
  error: null,
  // username: '',
  // password: '',
  // usernameChanged: () => {},
  // passwordChanged: () => {},
};

export default reduxForm({
  form: 'authForm',
})(AuthForm);
