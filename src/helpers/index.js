import * as Yup from 'yup';

const rules = {
  isTel: new RegExp(
    /^\+?\d{2} ?(\(?\d{3}\)? ?(\d{3}(\s*))(\d{2}(\s*))(\d{2}(\s*)))$/,
  ),
};

export const FormSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  age: Yup.number()
    .min(5, 'Min 5 years old')
    .max(100, 'Max years 100')
    .required('Require'),
  gender: Yup.string()
    .required('Require'),
  phone: Yup.string()
    .required('Require')
    .matches(rules.isTel, 'Phone number is not valid'),
});

export const sortTable = (form, order, orderBy) => [...form].sort((a, b) => {
  if (typeof a[orderBy] === 'number' || typeof a[orderBy] === 'boolean') {
    return order === 'asc'
      ? a[orderBy] - b[orderBy]
      : b[orderBy] - a[orderBy];
  }

  return order === 'asc'
    ? a[orderBy].localeCompare(b[orderBy])
    : b[orderBy].localeCompare(a[orderBy]);
});
