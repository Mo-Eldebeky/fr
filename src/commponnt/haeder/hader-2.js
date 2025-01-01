import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  alpha,
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

import { ExpandMore, Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useState } from "react";
const color = grey[800];
const Searchs = styled("div")(({ theme }) => ({
  position: "relative",
  width:"50%",
  borderRadius:"25px",
border:"1px solid #777",

  "&:hover": {
    
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const options = [
  "All Categories",
  "CAR",
  "Clothes",
  "Electronics",
];
const Hader2 = () => {
   const te= useTheme()
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    <Container sx={{ my: 3 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box
          sx={{
            textAlign: "center",
            color: color,
          }}
        >
          <ShoppingCartOutlinedIcon sx={{color:te.palette.
// @ts-ignore
          colorIcon.main}} fontSize={"large"}  />
          <Typography sx={{ color:te.palette.
// @ts-ignore
          colorIcon.main, fontWeight: "bold" }}>E-commerce</Typography>
        </Box>

        <Searchs sx={{
          display:"flex",
          p:"0 0 0 20px",
              }}>
          <SearchIconWrapper>
            <SearchIcon  sx={{color:te.palette.colorIcon.main }}  />
          </SearchIconWrapper>
          <StyledInputBase
          sx={{p:"0"}}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <Box sx={{flexGrow:1}} ></Box>

          <List
            component="nav"
            aria-label="Device settings"
            // @ts-ignore
            sx={{ borderLeft:"1px solid white", width:"150px",bgcolor: te.palette.mycolor.main,"&:hover":{cursor:"pointer"},borderRadius :"0 25px 25px 0"}}

          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{textAlign:"center" }}
              
            >
              <ListItemText
              
                secondary={options[selectedIndex]}
              />
              <ExpandMore/>
            </ListItem>
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
        </Searchs>

        <Stack direction={"row"} alignItems={"center"}>
          <IconButton sx={{ mr: 2 }} aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartOutlined sx={{color:te.palette.
// @ts-ignore
              colorIcon.main}} />
            </StyledBadge>
          </IconButton>
          <Person2Outlined  sx={{color:te.palette.
// @ts-ignore
          colorIcon.main}}  />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hader2;
