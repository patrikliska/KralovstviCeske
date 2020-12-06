import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  link: {
    flex: 1,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    textDecoration: "none",
    color: "#000000",
  },
}));

export default function App() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState("Home");

  const classes = useStyles();

  const Home = () => {
    return <h2>Home</h2>;
  };

  const About = () => {
    return <h2>About</h2>;
  };

  const Users = () => {
    return <h2>Users</h2>;
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setMenuVisible(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {selectedPage}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>

          <Menu
            id="simple-menu"
            anchorEl={menuVisible}
            keepMounted
            open={menuVisible}
            onClose={() => setMenuVisible(false)}
          >
            <MenuItem className={classes.menuItem}>
              <Link
                to="/"
                onClick={() => setSelectedPage("Home")}
                className={classes.link}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <Link
                to="/about"
                onClick={() => setSelectedPage("About")}
                className={classes.link}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <Link
                to="/users"
                onClick={() => setSelectedPage("Users")}
                className={classes.link}
              >
                Users
              </Link>
            </MenuItem>
          </Menu>
        </AppBar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
