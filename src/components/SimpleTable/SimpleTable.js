// node_modules
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// hooks
import { makeStyles } from '@material-ui/core/styles';

// components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Tooltip,
} from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { TableHeader } from './TableHeader';

// helpers
import { sortTable } from '../../helpers';

// interface
import { formField } from '../../typedefs';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transition: 'background-color 0.35s cubic-bezier(.3, .1, .3, 1)',
    },
  },
});

export const SimpleTable = ({ form, setForm }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';

    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const removeRow = (id) => {
    const result = [...form].filter(row => row.id !== id);

    setForm(result);
  };

  useEffect(() => {
    setRows(form);
  }, [form]);

  useEffect(() => {
    const res = sortTable(form, order, orderBy);

    setRows(res);
  }, [order, orderBy, form]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHeader
          order={order}
          orderBy={orderBy}
          handleSort={handleRequestSort}
        />
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} className={classes.row}>
              <TableCell align="left">
                {row.firstName}
              </TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">
                {row.gender ? 'Male' : 'Female'}
              </TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell>
                <Tooltip title="Delete">
                  <Button
                    onClick={() => removeRow(row.id)}
                  >
                    <DeleteOutlinedIcon color="secondary" />
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SimpleTable.propTypes = {
  setForm: PropTypes.func.isRequired,
  form: PropTypes.arrayOf(PropTypes.shape(formField)).isRequired,
};
