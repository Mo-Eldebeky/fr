import {
  DarkMode,
  Facebook,
  Instagram,
  KeyboardArrowDown,

  LightMode,
  Twitter,
} from "@mui/icons-material";
import {

  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
const options = ["EN", "AR"];

const Hader2 = ({setmymode}) => {
  const them = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        bgcolor: "#2B3445",
        mt: 2,
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction={"row"} alignItems="center" sx={{}}>
          <Typography
            sx={{
              bgcolor: "#D23F57",
              fontSize: "10px",
              borderRadius: "13px",
              fontWeight: "bold",
              padding: "2px 10px",
              width: "fit-content",
              mr: 2,
            }}
          >
            Free
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            Free Expretion Shoping
          </Typography>
        </Stack>

        <Stack direction={"row"} alignItems="center" >
        <IconButton   onClick={() => {
                return setmymode(
                  them.palette.mode === "light" ? "dark" : "light"
                );
              }} >
        {them.palette.mode=== "dark"?  <LightMode sx={{color:"#fff",fontSize:"15px"}} />:  <DarkMode sx={{color:"#fff",fontSize:"15px"}}  />}

        </IconButton>
          

        
        
        

          <List component="nav" aria-label="Device settings" sx={{p:"0",mx:1}}>
            <ListItemButton
            sx={{
              p:"8px 3px"
            }}
              id="lock-button"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText sx={{
                ".MuiTypography-root": {color:"#fff" ,fontSize:"12px"}
              }} secondary={options[selectedIndex]} />
              <KeyboardArrowDown sx={{fontSize:"18px",color:"#fff"}} />
            </ListItemButton>
          </List>




          
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
              sx={{fontSize:"13px"}}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>







          <Facebook sx={{color:"#fff"}} />
          <Twitter  sx={{mx:1 ,color:"#fff"}} />
          <Instagram sx={{color:"#fff"}} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hader2;
