// hooks
import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles({
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
