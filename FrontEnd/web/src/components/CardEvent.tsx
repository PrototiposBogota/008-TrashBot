import * as React from 'react'

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import { IEventProps } from '../widgets/common';

import cardImage from '../images/triangle-min.png';

const styles = theme => ({
    card: {
        maxWidth: 345,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    marginTopBottom: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
    media: {
        height: 140,
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        maxWidth: '100%',
    },
});

class CardEvent extends React.Component<IEventProps> {

    public render() {

        const { classes, title, place, date, description } = this.props;

        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cardImage}
                        title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom={true} variant="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography  align="right" color="textSecondary">
                            Fecha: {date}
                        </Typography>
                        <Typography className={classes.marginTopBottom} align="right" component="p" color="textSecondary">
                            Lugar: {place}
                        </Typography>
                        <Typography component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(CardEvent);