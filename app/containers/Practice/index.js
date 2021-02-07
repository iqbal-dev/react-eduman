/**
 *
 * Practice
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectMembers,
} from '../App/selectors';
import { loadMembers } from '../App/actions';
import DataTable from '../../components/DataTable';

const key = 'practice';
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Practice = ({ members, loading, error, onGetData }) => {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    onGetData();
  }, []);
  useEffect(() => {
    console.log({ members });
  }, [loading]);

    const classes = useStyles();
  return (
<>
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
    <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Phone</StyledTableCell>
          <StyledTableCell align="center">File Name</StyledTableCell>
          <StyledTableCell align="center">Button</StyledTableCell>
        </TableRow>
      </TableHead>
          {
            members.length
              ? members.map(data => <DataTable member={ data }/>):[]
      }
    </Table>
  </TableContainer>
      
</>
  );
};

Practice.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  members: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onGetData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  members: makeSelectMembers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetData: () => dispatch(loadMembers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Practice);
