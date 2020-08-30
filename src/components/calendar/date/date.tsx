import React from "react";

export default class Date extends React.Component
{
    constructor(props: IDate)
    {
        super(props);
        this.props = props;
    }

    props: IDate;

    render()
    {
        let { Date } = this.props;

        return (
            <div>{Date.toDateString()}</div>
        )
    }
}