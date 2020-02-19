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
            error={!!errors?.firstName || null}
            helperText={errors?.firstName}
            fullWidth
            margin="normal"
          />
          <Field
            component={TextField}
            name="lastName"
            label="Last Name"
            error={!!errors?.lastName || null}
            helperText={errors?.lastName}
            fullWidth
            margin="normal"
          />
          <Field
            component={PhoneField}
            name="phone"
            label="Phone"
            error={!!errors?.phone || null}
            helperText={errors?.phone}
            fullWidth
            margin="normal"
          />
          <Field
            component={TextField}
            label="Age"
            name="age"
            type="number"
            error={!!errors?.age || null}
            helperText={errors?.age}
            fullWidth
            margin="normal"
          />
          <Field
            component={TextField}
            label="Please select your gender"
            name="gender"
            select
            // value={values.gender}
            // onChange={handleChange}
            error={!!errors?.gender || null}
            helperText={errors?.gender}
            className={classes.select}
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
