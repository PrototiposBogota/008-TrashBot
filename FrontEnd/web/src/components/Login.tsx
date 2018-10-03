import Button from '@material-ui/core/Button';
import * as React from 'react';

import { ILoginProps, ILoginState } from '../widgets/common';

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
                        <input type="email" id="email" value={this.state.email}
                            onChange={this.handleChange} placeholder="We will contact you after reviewing your message" />
                    </div>
                    <div>
                        <label htmlFor="pass">Contraseña</label>
                        <input type="password" value={this.state.password}
                            onChange={this.handleChange} id="password" placeholder="We will contact you after reviewing your message" />
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
                    <Button variant="contained" onClick={this.handleRegister} className="btn" color="primary" type="button">
                        No estoy registrado
                    </Button>
                </div>

            </div>
        );
    }

    private validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    private handleRegister =() =>{
        // tslint:disable-next-line:no-console
        console.log("Registrar");
        this.props.goToRegister();
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