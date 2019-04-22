import React from 'react';
import { connect } from "react-redux";
import { authActions } from '../_actions';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            credential: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, credential } = this.state;
        const { dispatch } = this.props;
        // Todo: Dispatch Login action
        if(username && credential) {
            dispatch(authActions.login(username, credential));
        }        
    }
    render() {
        const { username, credential } = this.state;
        return (
            <div className="container">
                <div className="login-container">
                    <form name="loginForm" onSubmit={this.handleSubmit}>
                        <div className="formGroup">
                            <input className="form-control" type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange} />
                        </div>
                        <div className="formGroup">                        
                            <input className="form-control" type="text" name="credential" value={credential} placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="formGroup">                        
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 