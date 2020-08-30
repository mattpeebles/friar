import React from "react";
import Earnings from "../../../data/EarningsService";
import { connect, ConnectedProps } from 'react-redux'
import { selectDate, addEarningsByDate } from "../../../redux/actions";
import "./date.scss";


const mapState = (state: RootState, ownProps: IDateComponentProps) =>
{
    let earnings = state?.earnings.EarningsByDate[ownProps.Date.toISOString()];
    return { earnings: earnings?.Earnings, earningsCount: earnings?.EarningsCount }
}


const mapDispatch = {
    addEarningsByDate,
    selectDate
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = IDateComponentProps & PropsFromRedux;


/**shows the date, the days from today, and the number of earnings on that date. 
 * 
 * used in the date list to navigate to the grid of earnings */
class DateComponent extends React.Component<Props, any>
{
    async componentDidMount()
    {
        if (this.props.earnings === null || this.props.earnings === undefined)
        {
            let retrievedEarnings = (await Earnings.getEarningsByDateAsync(this.props.Date));
            this.props.addEarningsByDate(this.props.Date, retrievedEarnings);
        }

    }

    handleSelectDate = () =>
    {
        this.props.selectDate(this.props.Date);
    };


    render()
    {
        let { Date: CompDate } = this.props;

        return (
            <div className="date-container" onClick={this.handleSelectDate}>
                <div className="date">{CompDate.toDateString()}</div>
                <div className="earnings-count">{this.props.earningsCount} er</div>
            </div>

        )
    }
}


export default connector(DateComponent);