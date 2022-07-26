import {
  ChevronLeft as ChevronLeftIcon,
  Flag as FlagIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  Store as StoreIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  main: {
    padding: theme.spacing(3),
  },
}));

export default function MenuPageTemplate(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Iteris Imóveis</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <div className={classes.list}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem component={NavLink} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={NavLink} to="/imoveis">
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Imóveis" />
            </ListItem>
            <ListItem component={NavLink} to="/cadastrar">
              <ListItemIcon>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText primary="Cadastrar" />
            </ListItem>
            <ListItem component={NavLink} to="/sobre">
              <ListItemIcon>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.main}>
        <div className="ConteudoPrincipalAQUI">{props.children}</div>
      </main>
    </div>
  );
}
