import { NavigateNext, Widgets } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import React from "react";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
const Hader3 = () => {
  const te = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              bgcolor: te.palette.mycolor.main,
              color: te.palette.text.secondary,
            }}
          >
            <WindowIcon sx={{ mr: 1.5 }} />
            Dashboard
            <NavigateNext sx={{ ml: 3 }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{".MuiPaper-root":{width:193 }}}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>

          
          
        
          </Menu>
        </Box>
        <Box>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hader3;
