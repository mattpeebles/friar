import React from "react";
import "./header.scss";

export default class Header extends React.Component
{

    render()
    {
        return (
            <header className="header">
                <div className="logo">friar</div>
                <div className="gutter"></div>
                <div className="search">search</div>
            </header>
        )
    }
}