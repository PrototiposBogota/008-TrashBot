import * as React from 'react';

import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { IClassesProps, IEventsState } from '../widgets/common';
import CardEvent from './CardEvent';

import { API } from '../service/backend';


const styles = theme => ({
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    layout: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 'auto',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1100,
        },
    },
});



class Eventos extends React.Component<IClassesProps, IEventsState> {
    constructor(props) {
        super(props);
        this.state = { cards: [] };
    }

    public componentDidMount() {

        API.getNextEvents().then(data => {
            this.setState({cards: data})
        });
    }

    public render() {

        const { classes } = this.props;

        const {cards} = this.state;

        return (
            <div>

                <h2>Próximos eventos</h2>

                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container={true} spacing={40}>
                        {cards.map((card) => (
                            <Grid item={true} key={card.id} sm={6} md={4} lg={3}>
                                <CardEvent
                                    title={card.nombre}
                                    date={`${card.fecha} ${card.hora}`}
                                    place={card.lugar}
                                    description={card.descripcion} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>

        );
    }
}

export default withStyles(styles)(Eventos);