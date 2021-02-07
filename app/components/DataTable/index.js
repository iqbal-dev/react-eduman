/**
 *
 * DataTable
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function DataTable({ member }) {
  const [open, setOpen] = useState(false);
  const[getData, setGetData] = useState({})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  const handleData = (id) => {
    if (id == member.speechId) {
      setGetData(member)
    }
  }
  return (
    <>
      <TableBody>
          <StyledTableRow key={member.speechId}>
            <StyledTableCell component="th" scope="row">
              {member.speechId}
            </StyledTableCell>
            <StyledTableCell align="middle">{member.speakerName}</StyledTableCell>
            <StyledTableCell align="middle">{member.speakerEmail}</StyledTableCell>
            <StyledTableCell align="middle">{member.speakerMobile}</StyledTableCell>
            <StyledTableCell align="middle">{member.fileName}</StyledTableCell>
          <StyledTableCell align="middle"><Button variant="outlined" color="primary" onClick={() => { handleData(member.speechId); handleClickOpen() }}>Click</Button></StyledTableCell>
          </StyledTableRow>
      </TableBody>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Name: {getData.speakerName}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Email: {getData.speakerEmail}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          speechDetails: {getData.speechDetails}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
  
}

DataTable.propTypes = {};

export default memo(DataTable);
