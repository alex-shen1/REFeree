import React from 'react';
import '../Styling/Login.css';


const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleLogin = () => {
        this.props.signInWithGoogle();
        console.log(this.props.user.uid)
    }

    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        user
                            ? <button onClick={signOut}>Sign out</button>
                            : <button onClick={this.handleLo}>Sign in with Google</button>
                    }
                </header>
            </div>
        )
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);