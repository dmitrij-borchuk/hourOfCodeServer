import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/users';
import List from '../../components/List';

class TeacherView extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})),
  }
  static defaultProps = {
    users: [],
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const {
      users,
    } = this.props;
    const items = users.map(user => user.username);

    return (
      <List items={items} />
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.list,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeacherView);
