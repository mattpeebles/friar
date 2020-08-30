import React from "react";
import Earnings from "../../../data/EarningsService";

/**shows the date, the days from today, and the number of earnings on that date. 
 * 
 * used in the date list to navigate to the grid of earnings */
export default class Date extends React.Component
{
    constructor(props: IDate)
    {
        super(props);
        this.props = props;
        this.state = { earnings: [], earningsCount: null };
    }

    state: { earnings: any[], earningsCount?: number | null };

    props: IDate;

    async componentDidMount()
    {
        let retrievedEarnings = (await Earnings.getEarningsByDateAsync(this.props.Date)).earningsCalendar;
        this.setState({ earnings: retrievedEarnings, earningsCount: retrievedEarnings.length })
    }

    render()
    {
        let { Date } = this.props;

        return (
            <div className="date-container">
                <div className="date">{Date.toDateString()}</div>
                <div className="earnings-count">{this.state.earningsCount} er</div>
            </div>

        )
    }
}