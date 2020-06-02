import React from 'react';
import '../Styling/Login.css';




export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {
                        this.props.isLoggedIn
                            ? <p>Hello, "NAME""</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        this.props.isLoggedIn
                            ? <button onClick={this.props.handleLogout} >Sign out</button>
                            : <button onClick={this.props.handleGoogleLogin}>Sign in with Google</button>
                    }
                </header>
            </div>
        )
    }
}
