// node_modules
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';

// hooks
import { makeStyles } from '@material-ui/core/styles';

// components
import { Button, MenuItem, Box, Tooltip } from '@material-ui/core';
import { PhoneField } from '../PhoneField';
import { TextField } from '../TextField';

// helpers
import { FormSchema } from '../../helpers';

// interface
import { formField } from '../../typedefs';

const useStyles = makeStyles({
  select: {
    minWidth: 300,
  },
  box: {
    marginTop: 40,
    justifyContent: 'flex-end',
    display: 'flex',
  },
  button: {
    marginLeft: 20,
  },
});

// component
export const UserForm = ({ setForm, form }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstName: '', lastName: '', phone: '', age: '', gender: true,
      }}
      validateOnBlur
      validateOnChange={false}
      validationSchema={FormSchema}
      onSubmit={(values, { resetForm }) => {
        setForm([
          ...form,
          {
            id: uuid(),
            ...values,
          },
        ]);

        resetForm();
      }}
    >
      {({ handleSubmit, values, errors, handleChange }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            return handleSubmit();
          }}
        >
          <Field
            component={TextField}
            name="firstName"
            label="First Name"
            type="text"
            error={!!errors?.firstName || null}
            fullWidth
            helperText={errors?.firstName}
            margin="normal"
          />
          <Field
            component={TextField}
            error={!!errors?.lastName || null}
            label="Last Name"
            name="lastName"
            fullWidth
            helperText={errors?.lastName}
            margin="normal"
          />
          <Field
            error={!!errors?.phone || null}
            label="Phone"
            name="phone"
            fullWidth
            helperText={errors?.phone}
            margin="normal"
            component={PhoneField}
          />
          <Field
            component={TextField}
            error={!!errors?.age || null}
            label="Age"
            name="age"
            type="number"
            fullWidth
            helperText={errors?.age}
            margin="normal"
          />
          <Field
            className={classes.select}
            component={TextField}
            error={!!errors?.gender || null}
            select
            label="Please select your gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            helperText={errors?.gender}
            margin="normal"
          >
            <MenuItem value>
                Male
            </MenuItem>
            <MenuItem value={false}>
                Female
            </MenuItem>
          </Field>
          <Box className={classes.box}>
            <Tooltip title="Reset form">
              <Button
                variant="outlined"
                color="secondary"
                type="reset"
              >
                  Clear
              </Button>
            </Tooltip>
            <Tooltip title="Submit form">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                  Submit
              </Button>
            </Tooltip>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

UserForm.defaultProps = {
  form: [],
};

UserForm.propTypes = {
  setForm: PropTypes.func.isRequired,
  form: PropTypes.arrayOf(PropTypes.shape(formField)),
};
