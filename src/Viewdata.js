import React, { Component } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, city,fees) {
    return { name, city, fees};
  }
  

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.primary",
  width: "980px",
  height: "250px",
};

export default class Viewdata extends Component {
  render() {
    return (
      <div className="body2">
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", justifyContent: "center", m: 2, r: 2 }} />
         
          <Card sx={{ maxWidth: 880, maxHeight: 820 }}>
            <Typography
              sx={{ fontSize: 30 }}
              color="text.secondary"
              align="center"
            >LOGIN DATA RECORD
            </Typography>
            <Box sx={{ ...commonStyles,  }} />
            </Card>
            </Container>
      </div>
    );
  }
}