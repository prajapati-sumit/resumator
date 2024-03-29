import React from "react";
import "./App.css";
import Resume from "./components/Resume"; /*components initialized */
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
/*material-ui used for basic styling components*/

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
}));
/*defining layout of differnt components on the rendered web-app*/

export function App () {
  const classes = useStyles();
    return (
        <div className="App">
        <AppBar position="static">
            <Toolbar>
                 <Typography variant="h6" className={classes.title}>Resumator</Typography>
                
            </Toolbar>
        </AppBar>
        <Resume />
        </div>
    );
  }

export default App;
