import React from 'react';
import { func, string } from 'prop-types';
import { styled } from '@material-ui/core/styles';
import MaterialTextField from '@material-ui/core/TextField';
// import styles from './TextInput.module.scss';

const StyledTextInput = styled(MaterialTextField)({
  background: '#e8f0fe',
  display: 'flex',
  marginRight: '25px',
  width: '100%'
});

const TextField = ({ name, value, onChange, ...props }) => {
  return (
    <StyledTextInput
      name={name}
      value={value}
      onChange={onChange}
      error={props.error}
      variant='filled'
      {...props}
    />
  );
};

TextField.propTypes = {
  name: string,
  value: string,
  onChange: func,
  error: string
};

export default TextField;
