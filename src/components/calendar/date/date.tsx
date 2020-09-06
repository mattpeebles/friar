import React from "react";
import Earnings from "../../../data/EarningsService";
import { connect, ConnectedProps } from 'react-redux'
import { selectDate, addEarningsByDate } from "../../../redux/actions";
import { Constants } from "../../../utils/FriarExtensions";
import "./date.scss";


const mapState = (state: RootState, ownProps: IDateComponentProps) =>
{
    let earnings = state?.earnings.EarningsByDate[ownProps.Date.toISOString()];
    return {
        IsSelected: ownProps.Date === state.dates.selectedDate,
        Earnings: earnings?.Earnings,
        EarningsCount: earnings?.EarningsCount,
        Day: ownProps.Date.getDate(),
        Month: ownProps.Date.getMonth(),
        Year: ownProps.Date.getFullYear(),
        DayOfWeek: ownProps.Date.getDay()
    }
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
        if (this.props.Earnings === null || this.props.Earnings === undefined)
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
        return (
            <div className={`da-container${this.props.IsSelected ? " selected" : ""}`} onClick={this.handleSelectDate}>
                <div className="da-row">
                    <div className="da-day">
                        {this.props.Day}
                    </div>
                    {this.props.ShowMonth &&
                        <div className="da-month">
                            {Constants.Months[this.props.Month]}
                        </div>
                    }
                </div>
                <div className="da-row">
                    <div className="earnings-count">{this.props.EarningsCount} earnings</div>
                </div>
            </div>

        )
    }

}

export default connector(DateComponent);