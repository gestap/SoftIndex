import PropTypes from 'prop-types';

export const formField = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.bool,
};

export const textField = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func,
};
