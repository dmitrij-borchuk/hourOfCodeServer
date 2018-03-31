import React from 'react';
import TextField from 'material-ui/TextField';
// import { TextField } from 'redux-form-material-ui';

// eslint-disable-next-line import/prefer-default-export
export const renderTextField = ({
  input,
  ...custom
}) => {
  return (
    <TextField
      {...custom}
      {...input}
    />
  );
  // return d => (console.log(d), <input />);
};
