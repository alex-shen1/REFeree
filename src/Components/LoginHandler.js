import React, { Component } from "react";

function withLogin(Component) {
    return class WithLogin extends React.Component {

        render() {
            return <Component {...this.props} {...this.state} />
        }
    }
}