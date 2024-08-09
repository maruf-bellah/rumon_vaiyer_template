import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Grid, Paper, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SortCurtDrawar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography sx={{ mb: 2 }}>Maruf Bellah</Typography>
        <Divider></Divider>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}

        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((maruf) => (
        <React.Fragment key={maruf}>
          <GridViewOutlinedIcon
            onClick={toggleDrawer(maruf, true)}
            fontSize="small"
          />
          <Drawer
            anchor={maruf}
            open={state[maruf]}
            onClose={toggleDrawer(maruf, false)}
          >
            {list(maruf)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SortCurtDrawar;
