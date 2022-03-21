import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";


export default function ButtonAppBar() {
   
    
  return (
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" >
              <IconButton sx={{ p: 1 }}>
                <Avatar alt="Remy Sharp"  sx={{ width: 74, height: 60 }} src="https://rlv.zcache.com/india_ashoka_chakra_classic_round_sticker-r658c09693ecf4ef788073b7d4ce3b6e7_0ugmp_8byvr_704.webp" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Ministry Of Health Dept,
            Govt Of India
          </Typography>
          <IconButton sx={{ p: 1 }}>
          <Button
           onClick={show}
            variant="contained"
            style={{backgroundColor:"orange"}} >FAQ !
            
          </Button>
          
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const show = () => {
    
        alert("Frequently Asked Questions !");
      
  }