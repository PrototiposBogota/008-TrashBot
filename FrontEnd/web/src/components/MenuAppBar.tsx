import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

import Home from './Home';
import Index from './Index';
// import Login from './Login';
import SideMenu from './SideMenu';

import { API } from '../service/backend';
import { ILoginState, IUserToRegister, Page } from '../widgets/common';

const styles = {
  container: {
    margin: '1em',
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  }
};


// tslint:disable-next-line:interface-name
export interface Props {
  classes: any;
}

class MenuAppBar extends React.Component<Props> {
  public state = {
    activePage: Page.Eventos,
    anchorEl: null,
    auth: false,
    openSideMenu: false,
    pageWithoutAuth: Page.Landing
  };

  public goToRegister = () => {
    this.setState({ pageWithoutAuth: Page.Register });
  }

  public login = (usuario: ILoginState) => {

    API.login(usuario).then(resp => {
      // tslint:disable-next-line:no-console
      console.log(resp.access_token);
      sessionStorage.setItem('token', resp.access_token);
      this.setState({ auth: true });
    }).catch(e => {
      // tslint:disable-next-line:no-console
      console.log(e);

    });

  }
  public componentDidMount() {
    if (sessionStorage.getItem('token') !== null) {
      this.setState({ auth: true });
    }
  }

  public register = (newUser: IUserToRegister) => {
    // tslint:disable-next-line:no-console
    console.log(newUser);
    const user : ILoginState ={
      email: newUser.email,
      password: newUser.password
    }
    API.register(newUser).then(resp => {
      this.login(user);
    }).catch(e => {
      // tslint:disable-next-line:no-console
      console.log(e);

    });
    
  }

  public render() {
    const { classes } = this.props;
    const { auth, anchorEl, pageWithoutAuth } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>
            {auth && (
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleSideMenu}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="title" color="inherit" className={classes.flex}>
              TrashBot
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                  }}
                  transformOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleCloseSession}>Cerrar Sesión</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <SideMenu handlePage={this.changePage} open={this.state.openSideMenu} handleCloseMenu={this.handleCloseSideMenu} />
        <div className={classes.container}>
          {
            !auth && pageWithoutAuth !== Page.Landing && 
              <Home page={this.state.pageWithoutAuth}  register={this.register} />
          }
          {
            !auth && pageWithoutAuth === Page.Landing &&
            <Index login={this.login} goToRegister={this.goToRegister} />
          }
          {
            auth && <Home page={this.state.activePage} register={this.register} />
          }
        </div>
      </div>

    );
  }

  private changePage = (page: Page) => () => {
    this.setState({ activePage: page });
  }

  private handleCloseSideMenu = () => () => {
    this.setState({ openSideMenu: false });
  };

  private handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleSideMenu = (event: any) => {
    this.setState({ openSideMenu: true });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };

  private handleCloseSession = () => {
    this.handleClose();
    sessionStorage.clear();
    this.setState({ auth: false, pageWithoutAuth: Page.Landing});
  };

}

export default withStyles(styles)(MenuAppBar);
