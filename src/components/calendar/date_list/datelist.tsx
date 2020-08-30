import React from "react";
import DateComponent from "../date/date";
import "./DateList.scss";

export default class DateList extends React.Component  
{
    constructor(props: IDateListProps)
    {
        super(props)
        this.props = props;
    }

    props: IDateListProps;

    render()
    {
        const { Dates } = this.props;

        return (
            <div>
                <DateComponent Date={new Date()} key="today"></DateComponent>
                {Dates.map(date => <DateComponent Date={date.Date} key={date.key}></DateComponent>)}
            </div>);
    }
}