import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getInitialData as getInitialDataAction } from './actions/loader';
import Dashboard from './views/Dashboard';
import GroupView from './views/GroupView';
import Loader from './components/Loader';
// import AppDrawer from './components/AppDrawer/container';
import AppHeader from './components/AppHeader/container';

export const Container = styled.div`
  height: 100%;
`;

class App extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.shape({
      id: PropTypes.number,
    }),
    isFetching: PropTypes.bool.isRequired,
    getInitialData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentUser: null,
  };

  // state = {
  //   menuIsOpened: false,
  // }

  componentWillMount() {
    const {
      getInitialData,
    } = this.props;

    getInitialData();
  }

  // toggleMenu(state: bool) {
  //   this.setState({ menuIsOpened: state });
  // }

  render() {
    const {
      isFetching,
      currentUser,
    } = this.props;
    let rendering = <Loader />;

    if (!isFetching && !currentUser) {
      rendering = <Redirect to="/login" />;
    } else if (!isFetching) {
      rendering = (
        <Container>
          <AppHeader />
          {/* <AppDrawer /> */}

          {/* Routing for logged in user */}
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/group/:id" component={GroupView} />
            {/* <Route path="/user/:id" component={UserProfilePage} /> */}

            {/* Default route */}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Container>
      );
    }

    return rendering;
  }
}

const mapStateToProps = ({ auth, loader }) => ({
  currentUser: auth.currentUser,
  isFetching: loader.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getInitialData: () => dispatch(getInitialDataAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
