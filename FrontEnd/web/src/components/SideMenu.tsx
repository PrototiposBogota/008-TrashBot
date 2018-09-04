import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

// import * as SideMenuItems from '../widgets/static-data';
import SideMenuItems from './SideMenuItems';

import {Page} from '../widgets/common';

// tslint:disable-next-line:interface-over-type-literal
type Props = {
    classes: any;
    open: boolean;
    handleCloseMenu: () => () =>void;
    handlePage: (page: Page) => () => void;
}


const styles = {
    fullList: {
        width: 'auto',
    },
    list: {
        width: 250,
    },
  };

class SideMenu extends React.Component<Props> {
    // constructor(props){
    //     super(props);
    //     // this.state = { open: false};
    // }

    public render () {
        const { classes } = this.props;
        // const {open } = this.state;
        const sideList = (
            <div className={classes.list}>
                <List>
                    <SideMenuItems handlePage={this.props.handlePage}/></List>
            </div>
        );


        return (
            <Drawer open={this.props.open} onClose={this.props.handleCloseMenu()}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.props.handleCloseMenu()}
                    onKeyDown={this.props.handleCloseMenu()}
                >
                    {sideList}
                </div>
            </Drawer>
        )
    }
}

export  default withStyles(styles)(SideMenu);