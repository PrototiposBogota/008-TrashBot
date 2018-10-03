import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { IRegisterProps, IUserToRegister } from '../widgets/common';

// tslint:disable:object-literal-sort-keys

const styles = theme => ({
    
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    // stepper: {
    //     padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    // },
    // buttons: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    // },
    // button: {
    //     marginTop: theme.spacing.unit * 3,
    //     marginLeft: theme.spacing.unit,
    // },
});

class Register extends React.Component<IRegisterProps, IUserToRegister> {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            password: "",
            direccion: "",
            fecha: ""
         };
    }

    public render() {

        const { classes } = this.props;

        const align = {textAlign: "right" as "right"}

        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="display1" align="center">
                        Registrarse
                    </Typography>
                    <Typography variant="body1">
                        Bienvenido a TrashBot, el chat con inteligencia artificial que te ayudará a reciclar y a desechar mejor los residuos.
                    </Typography>
                    <Typography variant="body1">
                        Llena los siguientes campos para el acceso a TrashBot desde tu móvil o desde la pagína web.
                    </Typography>

                    <Grid container={true} spacing={24}>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                required={true}
                                id="name"
                                name="name"
                                label="Nombres"
                                onChange={this.handleChange}
                                fullWidth={true}
                                value={this.state.name}
                            />
                        </Grid>
                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                required={true}
                                id="fecha"
                                name="fecha"
                                label="Fecha de nacimiento"
                                fullWidth={true}
                                onChange={this.handleChange}
                                value={this.state.fecha}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                required={true}
                                id="direccion"
                                name="direccion"
                                label="Dirección"
                                fullWidth={true}
                                onChange={this.handleChange}
                                value={this.state.direccion}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                required={true}
                                id="email"
                                name="email"
                                label="Correo electrónico"
                                fullWidth={true}
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                required={true}
                                id="password"
                                name="password"
                                label="Contraseña"
                                fullWidth={true}
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </Grid>

                        <Grid item={true} xs={12} sm={6}>
                            <TextField
                                required={true}
                                id="lastName"
                                name="lastName"
                                label="Confirme su contraseña"
                                fullWidth={true}
                                autoComplete="lname"
                            />
                        </Grid>

                        <Grid style={align} item={true} xs={12}>
                            <Button onClick={this.handleClick}  variant="contained" color="primary" type="button">Registrar</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        );
    }

    private handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        } as IUserToRegister);
    }

    private handleClick = (event) =>{
        // tslint:disable-next-line:no-console
        console.log(this.state);
        
        this.props.register(this.state)
    }
}

export default withStyles(styles)(Register);