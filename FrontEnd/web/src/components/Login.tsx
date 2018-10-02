import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { ILoginProps, ILoginState } from '../widgets/common';

// tslint:disable-next-line:interface-name


// const styles = {
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     card: {
//         margin: '1em auto',
//         width: 275,
//     },
//     pos: {
//         marginBottom: 12,
//     },
//     title: {
//         fontSize: 14,
//         marginBottom: 16,
//     },
// };

class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props) {
        super(props);
        this.state = { email: 'test@example.com', password: 'test' };
    }

    public render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={this.state.email}
                            onChange={this.handleChange} placeholder="We will contact you after reviewing your message" />
                    </div>
                    <div>
                        <label htmlFor="email">Contraseña</label>
                        <input type="password" value={this.state.password}
                            onChange={this.handleChange} name="pass" placeholder="We will contact you after reviewing your message" />
                    </div>
                    <p>
                        <Button variant="contained" className="btn" color="primary" type="submit" disabled={!this.validateForm()}>
                            Ingresar
                        </Button>
                    </p>
                </form>
                <div>
                    <Button variant="contained" className="btn" color="primary" type="button">
                        Olvidé mi Contraseña
                    </Button>
                    <Button variant="contained" className="btn" color="primary" type="button">
                        No estoy registrado
                    </Button>
                </div>

            </div>
        );
    }

    private validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    private handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);
    }

    private handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        } as ILoginState);
    }
}

// export default withStyles(styles)(Login);
export default Login;