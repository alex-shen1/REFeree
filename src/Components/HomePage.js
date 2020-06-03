// import NavPanel from "./NavPanel";
import Progress from "./Progress";
import Refer from "./Refer";
import NavPanel from './NavPanel';

import React, { Component } from "react";

export default class HomePage extends Component {

    render() {
        return <div className="homepage">
            <NavPanel />
            <Refer activeUser={this.props.activeUser}/>
            <Progress />
        </div>
    }
}