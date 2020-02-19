// node_modules
import React from 'react';
import PropTypes from 'prop-types';

// components
import { TextField as Field } from '@material-ui/core';

// interface
import { textField } from '../../typedefs';

// component
export const TextField = (props) => {
  const { field, ...rest } = props;

  return (
    <Field
      {...rest}
      name={field.name}
      onChange={field.onChange}
      value={field.value}
    />
  );
};

TextField.propTypes = {
  field: PropTypes.shape(
    textField,
  ).isRequired,
};
