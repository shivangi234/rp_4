import React, { Component } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import Card from "@mui/material/Card";
import App from "./App.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default class extends Component {
  
  render() {
    return (
      <div className="body1">
        <Container maxWidth="sm">
          <Box sx={{ "& > :not(style)": { my: 0 } }}>
            <Card sx={{ maxWidth: 600, maxHeight: 820 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://cache.careers360.mobi/media/presets/1600X667/articles/uploads/froala_editor/images/2020/8/4/1596516919377.png"
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 30 }}
                  color="text.secondary"
                  align="center"
                >
                  Login Credential
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 2, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="UserName"
                    variant="outlined"
                    type="text"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top5Fees}
                    renderInput={(params) => (
                      <TextField {...params} label="Organisations" />
                    )}
                  />
                  
                    <Button variant="contained"  size="large"  sx={{ bgcolor: "primary.main"  }}>
                      Login
                    </Button>
                    
                   
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </div>
    );
  }
}

const top5Fees = [
  { label: "Jee-Main-2022" },
  { label: "NEET-2022" },
  { label: "OJEE-2022" },
  { label: "AIMS-2022" },
  { label: "CUCET-2022" },
];
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
)