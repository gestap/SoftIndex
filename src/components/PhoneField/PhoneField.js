// node_modules
import React from 'react';
import PropTypes from 'prop-types';

// components
import InputMask from 'react-input-mask';
import { TextField } from '@material-ui/core';

// interface
import { textField } from '../../typedefs';

// component
export const PhoneField = (props) => {
  const { field } = props;

  return (
    <InputMask
      mask="+38 (099) 999 99 99"
      onChange={field.onChange}
      value={field.value}
    >
      {() => (<TextField name={field.name} {...props} />)
      }
    </InputMask>
  );
};

PhoneField.propTypes = {
  field: PropTypes.shape(
    textField,
  ).isRequired,
};
