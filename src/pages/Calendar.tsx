import React from "react";
import DateList from "../components/calendar/date_list/datelist";
import Ticker from "../components/ticker_info/ticker/ticker";
import EarningsList from "../components/earnings_list/EarningsList";
import Gutter from "../components/gutter/gutter";
import { connect } from 'react-redux';
import { Util, Constants } from "../utils/FriarExtensions";
import "./Calendar.scss";
class Calendar extends React.Component<any, any>
{
    today = new Date();
    state = {
        DateRange: [...Array(7).keys()].map((_, index) => ({ Date: Util.addDays(this.today, (0 + index)), key: index.toString() } as IDateComponentProps))
    }

    handleForwardNav()
    {
        let dateRange = this.state.DateRange;
        dateRange.shift();
        let lastDateKnown = dateRange[dateRange.length - 1];
        let nextDate = Util.addDays(lastDateKnown.Date, 1);
        dateRange.push({ Date: nextDate, key: `${Constants.Months[nextDate.getMonth()]}-${nextDate.getDate()}` });
        this.setState({DateRange: dateRange})
    }

    handleBackwardNav()
    {
        let dateRange = this.state.DateRange;
        dateRange.pop();
        let firstDate = dateRange[0];
        let nextDate = Util.addDays(firstDate.Date, -1);
        dateRange.unshift({ Date: nextDate, key: `${Constants.Months[nextDate.getMonth()]}-${nextDate.getDate()}` });
        this.setState({DateRange: dateRange})
    }

    render()
    {
        return (
            <div className="App">
                <div className="cal-container">
                    <div className="cal-nav-button" onClick={() => this.handleBackwardNav()}>{"<"}</div>
                    <DateList Dates={this.state.DateRange}></DateList>
                    <div className="cal-nav-button" onClick={() => this.handleForwardNav()}>{">"}</div>
                </div>
                <div className="friar-body">
                    <EarningsList />
                    <Gutter height="auto" width="10%" minwidth="30px" />
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