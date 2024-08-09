import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import profileImage from "../../assets/imgage/profile.jpg";
import { Avatar } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationDrawar from "./NotificationDrawar";
import SortCurtDrawar from "./SortCurtDrawar";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = ({ handleDrawerOpen, darkMoodFunc, isDark, dataTheme }) => {
  const backgroundColorTheme = dataTheme === "dark" ? "#333" : "#fff";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          fontSize: "15px",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: backgroundColorTheme,
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem sx={{ fontSize: "14px" }} onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem sx={{ fontSize: "14px" }} onClick={handleMenuClose}>
        My account
      </MenuItem>
      <MenuItem sx={{ fontSize: "14px" }} onClick={handleMenuClose}>
        Activities
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      className="App"
      data-theme={dataTheme}
      sx={{
        flexGrow: 1,
        border: "none",
        backgroundColor: backgroundColorTheme,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: backgroundColorTheme,
          color: dataTheme === "dark" ? "white" : "black",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ boxShadow: "none" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              onClick={() => darkMoodFunc()}
              aria-label="show 4 new mails"
              color="inherit"
            >
              {isDark ? (
                <DarkModeOutlined fontSize="small" />
              ) : (
                <LightModeOutlined fontSize="small" />
              )}
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <SortCurtDrawar />
            </IconButton>
            <IconButton color="inherit">
              <StyledBadge color="success" badgeContent=" " variant="dot">
                <NotificationDrawar />
              </StyledBadge>
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src={profileImage}
              />
              <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "12px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default TopBar;
