import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  alpha,
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

import { Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useState } from "react";
const color = grey[800];
const Searchs = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
border:"1px solid white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];
const Hader2 = () => {
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
    <Container sx={{ my: 3 }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box
          sx={{
            textAlign: "center",
            color: color,
          }}
        >
          <ShoppingCartOutlinedIcon fontSize={"large"} />
          <Typography sx={{ fontWeight: "bold" }}>E-commerce</Typography>
        </Box>

        <Searchs sx={{
          display:"flex"
        }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: "background.paper" }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
              
                secondary={options[selectedIndex]}
              />
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
              <ShoppingCartOutlined />
            </StyledBadge>
          </IconButton>
          <Person2Outlined />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hader2;
