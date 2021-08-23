import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './TextInput.module.scss';

const StyledTextInput = styled(TextField)({
  background: '#e8f0fe',
  display: 'flex',
  marginRight: '25px',
  width: '100%'
});

const TextInput = ({ input, meta, ...props }) => {
  return (
    <StyledTextInput
      name={input.name}
      value={input.value}
      onChange={input.onChange}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      FormHelperTextProps={{
        classes: {
          error: styles.error
        }
      }}
      variant="filled"
      {...props}
    />
  );
};

TextInput.propTypes = {
  input: shape({
    name: string,
    value: string,
    onChange: func
  }),
  meta: shape({
    touched: bool,
    error: string
  })
};

export default TextInput;
