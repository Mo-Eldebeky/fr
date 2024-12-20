import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ExpandMore, Instagram, Twitter } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];
const Haeder1 = ({ setmymode }) => {
  const them = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
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
    <Box sx={{ border: "1px solid red", bgcolor: "#2B3445" }}>
    <Container >
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
              mr: 2,
              p: "3px 10px",
              
            }}
          >
            {" "}
            Free
          </Typography>
          <Typography
            sx={{
              color:"#fff",
              fontSize: "12px",
              fontWeight: 300,
            }}
            variant="body2"
          >
            {" "}
            Free Expretion Shoping
          </Typography>
      
          <Box flexGrow={1}></Box>
      
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton
              onClick={() => {
                return setmymode(
                  them.palette.mode === "light" ? "dark" : "light"
                );
              }}
            >
              {them.palette.mode === "light" ? (
                <DarkModeIcon sx={{fontSize:"16px",color:"#fff"}} />
              ) : (
                <LightModeIcon sx={{fontSize:"16px"}} />
              )}
            </IconButton>
      
            <List sx={{p:0,m:0}} component="nav" aria-label="Device settings">
              <ListItemButton
                sx={{ "&:hover": { cursor: "pointer" },px:1 }}
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px",color:"#fff" }} />
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
                  sx={{ fontSize: "11px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
      
            <FacebookIcon fontSize="small" sx={{color:"#fff"}} />
            <Twitter fontSize="small"sx={{mx:1,color:"#fff"}} />
            <Instagram sx={{color:"#fff"}} />
          </Stack>
        </Stack>
    </Container >
    </Box>
  );
};

export default Haeder1;
