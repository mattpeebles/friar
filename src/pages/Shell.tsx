import React from "react";
import Header from "../components/header/header";

import "./Shell.scss";

export default class Shell extends React.Component
{
    render()
    {
        return (
            <div id="shell">
                <Header></Header>
                <div id="shell-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}