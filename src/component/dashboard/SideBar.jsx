import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TopBar from "./TopBar";
import "../../App.css";
import { Dashboard, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List } from "@mui/material";
import logo from "../../assets/logo.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  // backgroundColor: "white",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  // backgroundColor: "white",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  //   whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = ({ darkMoodFunc, isDark, dataTheme }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [dashboardOpen, setDashboardOpen] = React.useState(false);

  const handleDashboardClick = () => {
    setDashboardOpen(!dashboardOpen);
  };
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer
        // className="App"
        // data-theme={theme}
        variant="permanent"
        open={open}
      >
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "auto" }}
          />
        </Box>
        <List>
          <ListItem onClick={handleDashboardClick}>
            <ListItemIcon>
              <Dashboard fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
            <List>
              {[
                "Inbox",
                "Starred",
                "Send email",
                "Drafts",
                "Inbox",
                "Starred",
                "Send email",

                "Starred",
              ].map((text, index) => (
                <ListItem
                  // className="App"
                  // data-theme={dataTheme}
                  key={text}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    // className="App"
                    // data-theme={dataTheme}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      m: 0,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? (
                        <InboxIcon fontSize="small" />
                      ) : (
                        <MailIcon fontSize="small" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>

      <Box component="div">
        <TopBar
          sx={{ mr: 2, ...(open && { display: "none" }) }}
          handleDrawerOpen={handleDrawerOpen}
          darkMoodFunc={darkMoodFunc}
          data-theme={dataTheme}
          isDark={isDark}
        ></TopBar>
        <Box sx={{ m: 2 }}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
