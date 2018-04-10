import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { reduxForm, Field, submit } from 'redux-form';
import { getUsers, createUser } from '../../actions/users';
import List from '../../components/List';
import Dialog from '../../components/DialogForm';
import { Fab } from '../../commonStyles';
import { renderTextField } from '../../utils';
import { DialogFormBody } from '../../components/DialogForm/styles';

const FORM_NAME = 'usersPage';

class UsersPage extends PureComponent {
  static propTypes = {
    getData: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({})),
  }
  static defaultProps = {
    users: [],
  }

  state = {
    dialogOpened: true,
  };

  componentDidMount() {
    this.props.getData();
  }

  onAddClick() {
    this.setState({
      dialogOpened: true,
    });
  }

  onDialogClose() {
    this.setState({
      dialogOpened: false,
    });
  }

  onDialogSave() {
    const {
      onSaveClick,
    } = this.props;

    onSaveClick();
  }

  render() {
    const {
      users,
    } = this.props;
    const {
      dialogOpened,
    } = this.state;
    const items = users.map(user => user.username);

    // TODO
    const serverError = '';
    const isFetching = false;

    return (
      <Fragment>
        <List items={items} />
        <Fab>
          <Button
            variant="fab"
            color="primary"
            aria-label="add"
            onClick={() => this.onAddClick()}
          >
            <AddIcon />
          </Button>
        </Fab>
        <Dialog
          isOpened={dialogOpened}
          onClose={() => this.onDialogClose()}
          onSave={() => this.onDialogSave()}
          title="New user"
        >
          <DialogFormBody>
            <Field
              name="email"
              component={renderTextField}
              error={!!serverError}
              label="Email"
              fullWidth
              helperText={serverError}
              disabled={isFetching}
            />
          </DialogFormBody>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.list,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getUsers()),
  onSaveClick: () => dispatch(submit(FORM_NAME)),
  onSubmit: data => dispatch(createUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: FORM_NAME,
})(UsersPage));
