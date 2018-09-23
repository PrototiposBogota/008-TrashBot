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

import {API} from '../service/backend';
import {ILoginState, Page} from '../widgets/common';

const styles = {
    container:{
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
export interface Props{
    classes: any;
}

class MenuAppBar extends React.Component<Props> {
    public state = {
        activePage : Page.Eventos,
        anchorEl: null,
        auth: false,
        openSideMenu: false,
  };

  public login = (usuario: ILoginState) => {
        
    API.login(usuario).then(resp=>{
      // tslint:disable-next-line:no-console
      console.log(resp.access_token);
      sessionStorage.setItem('token', resp.access_token);
      this.setState({ auth: true });
    }).catch(e=>{
      // tslint:disable-next-line:no-console
      console.log(e);
      
    });
    
}
  public componentDidMount(){
    if(sessionStorage.getItem('token') !== null){
      this.setState({ auth: true });
    }
  }

  public render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
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
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <SideMenu handlePage={this.changePage} open={this.state.openSideMenu} handleCloseMenu={this.handleCloseSideMenu} />
        <div className={classes.container}>
        {
          !auth?(
            // <Login login={this.login} />
            <Index login={this.login}/>
          ) 
          : <Home page={this.state.activePage}/>
        }
        </div>
      </div>

    );
  }

  private changePage = (page: Page ) => () =>{
    this.setState({ activePage: page });
  }

  private handleCloseSideMenu = () => () =>{
    this.setState({ openSideMenu: false });
  };

  private handleMenu = (event : any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handleSideMenu = (event : any) => {
    this.setState({ openSideMenu: true });
  };

  private handleClose = () => {
    this.setState({ anchorEl: null });
  };

}

export default withStyles(styles)(MenuAppBar);
