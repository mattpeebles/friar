import React from "react";
import logo from '../logo.svg';
import DateList from "../components/calendar/date_list/datelist";
import Ticker from "../components/ticker_info/ticker/ticker";

import "./Calendar.scss";
export default class Calendar extends React.Component
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

    async componentDidMount()
    {


    }

    render()
    {

        let today = new Date();
        let dateRange = [...Array(7).keys()].map((_, index) => ({ Date: this.addDays(today, (0 + index)), key: index.toString()} as IDate) );
        return (
            <div className="App">
                <DateList Dates={dateRange}></DateList>
                <div className="friar-body">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                    </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                    </a>
                    </header>
                    <Ticker Symbol="Work"></Ticker>
                </div>
            </div>
        );
    }
}