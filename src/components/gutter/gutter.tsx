import React from "react";

interface IGutterProps
{
    width: string;
    height: string;
    minwidth: string;
}

export default class Gutter extends React.Component<IGutterProps, any>
{
    render()
    {

        const divStyle = {
            width: this.props.width,
            height: this.props.height,
            minwidth: this.props.minwidth
        };

        return (
            <div style={divStyle} />
        )
    }
}