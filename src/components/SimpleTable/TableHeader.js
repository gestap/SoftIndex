// node_modules
import React from 'react';
import PropTypes from 'prop-types';

// components
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';

// component
export const TableHeader = ({ sort, order, orderBy }) => {
  const createSortHandler = property => (event) => {
    sort(event, property.id);
  };

  const headerCell = [
    {
      id: 'firstName',
      label: 'First Name',
    },
    {
      id: 'lastName',
      label: 'Last Name',
    },
    {
      id: 'phone', label: 'Phone',
    },
    {
      id: 'gender', label: 'Gender',
    },
    {
      id: 'age', label: 'Age',
    },
  ];

  return (
    <TableHead>
      <TableRow>
        {headerCell.map(cell => (
          <TableCell
            key={cell.id}
            align="left"
          >
            <TableSortLabel
              onClick={createSortHandler(cell)}
              direction={orderBy === cell.id ? order : 'asc'}
            >
              {cell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  sort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};
