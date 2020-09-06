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

        if (Dates === null || Dates === undefined)
        {
            return (<div></div>)
        }

        return (
            <div className="calendar">
                {Dates.map((date, index) => <DateComponent Date={date.Date} ShowMonth={this.showMonth(date.Date, index)} key={date.key}></DateComponent>)}
            </div>);
    }


    private showMonth(date: Date, index: number)
    {
        return index === 0 || this.props.Dates[index - 1].Date.getMonth() !== date.getMonth();
    }
}