// node_modules
import React, { useState, useEffect } from 'react';
import './App.css';

// hooks
import { makeStyles } from '@material-ui/core/styles';

// components
import { Grid } from '@material-ui/core';
import { UserForm } from './components/UserForm';
import { SimpleTable } from './components/SimpleTable';

// component
const App = () => {
  const [form, setForm] = useState(
    JSON.parse(localStorage.getItem('formData')),
  );

  const useStyles = makeStyles({
    container: {
      backgroundColor: '#fff',
      borderRadius: 16,
      border: '1px solid #DEE2ED',
      padding: 32,
      position: 'relative',
      marginTop: 80,
    },
    mt: {
      marginTop: 80,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form]);

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6} className={classes.container}>
        <UserForm form={form} setForm={setForm} />
      </Grid>
      <Grid item xs={12} md={8} className={classes.mt}>
        <SimpleTable form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
};

export default App;
