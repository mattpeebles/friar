import React from "react";
import DateList from "../components/calendar/date_list/datelist";
import Ticker from "../components/ticker_info/ticker/ticker";
import EarningsList from "../components/earnings_list/EarningsList";
import Gutter from "../components/gutter/gutter";
import { connect } from 'react-redux'
import "./Calendar.scss";

class Calendar extends React.Component
{
    constructor(props: any)
    {
        super(props);
        this.state = {};
    }


    private addDays(date: Date, days: number): Date 
    {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    }

    render()
    {

        let today = new Date();
        let dateRange = [...Array(7).keys()].map((_, index) => ({ Date: this.addDays(today, (0 + index)), key: index.toString() } as IDateComponentProps));
        return (
            <div className="App">
                <DateList Dates={dateRange}></DateList>
                <div className="friar-body">
                    <EarningsList />
                    <Gutter height="auto" width="10%" minwidth="30px"/>
                    <Ticker Symbol="Work"></Ticker>
                </div>
            </div>
        );
    }
}


export default connect(
    null,
    {}
)(Calendar);