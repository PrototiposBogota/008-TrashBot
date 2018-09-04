import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import * as React from 'react';
import {Page} from '../widgets/common';

interface ISideMenuItems{
    handlePage: (page: Page) => () => void
}

class SideMenuItems extends React.Component<ISideMenuItems>{

public render() {
    return (
    <div>
        
        <ListItem button={true} onClick={this.props.handlePage(Page.Eventos)} >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText  primary="Eventos" />
        </ListItem>
        <ListItem button={true} onClick={this.props.handlePage(Page.Chat)}>
            <ListItemIcon>
                <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
        </ListItem>        
    </div>
)}
}
export default SideMenuItems;