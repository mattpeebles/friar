import React from "react";
import "./ticker.scss";

export default class Ticker extends React.Component
{
    constructor(props: ITickerProps)
    {
        super(props);
        this.props = props;
    }

    props: ITickerProps;


    render()
    {
        const { Symbol } = this.props;


        return (
            <div className="ticker-container">
                <div className="ticker-header">
                    {Symbol}
                </div>
            </div>
        );
    }
}