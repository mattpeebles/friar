import React from "react";
import "./SectionHeader.scss";

export default class SectionHeader extends React.Component<ISectionHeaderProps, any>
{
    render()
    {
        return (
            <div className="sh-container">
                <header className="sh-title">{this.props.Title}</header>
            </div>);
    }
}