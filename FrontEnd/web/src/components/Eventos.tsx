import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        maxWidth: '100%',
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
});

export interface IEventosProps {
    classes: any;
}

class Eventos extends React.Component<IEventosProps> {

    public state = {
        secondary: false,
    };

    public render() {

        const { classes } = this.props;
        const { secondary } = this.state;

        return (
            <div>

                <h2>Próximos eventos</h2>

                

                <div className={classes.root}>

                    <Grid container={true} spacing={16}>
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="title" className={classes.title}>
                                Text only
                        </Typography>
                            <div className={classes.demo}>
                                <List >
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : ''}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={16}>
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="title" className={classes.title}>
                                Text only
                        </Typography>
                            <div className={classes.demo}>
                                <List >
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : ''}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={16}>
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="title" className={classes.title}>
                                Text only
                        </Typography>
                            <div className={classes.demo}>
                                <List >
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : ''}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }
}

export default withStyles(styles)(Eventos);