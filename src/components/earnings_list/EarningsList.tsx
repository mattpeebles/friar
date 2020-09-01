import { connect, ConnectedProps } from 'react-redux'
import React from 'react';
import "./EarningsList.scss";
import { selectStockSymbol } from "../../redux/actions";

const mapState = (state: RootState, ownProps: IEarningsListProps) =>
{
    return { SelectedDate: state.dates.selectedDate, Earnings: state?.earnings?.EarningsByDate[state?.dates?.selectedDate?.toISOString() ?? ""]?.Earnings ?? [] }
}


const mapDispatch = { selectStockSymbol }

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = IEarningsListProps & PropsFromRedux;



class EarningsList extends React.Component<Props, any>
{

    handleOnSelected = (selected: IEarning) =>
    {
        this.props.selectStockSymbol(selected.Symbol);
    }

    render()
    {
        return (
            <div className="el-container">
                <div>{this.props.SelectedDate?.toDateString()}</div>
                <div className="el-list">
                    {this.props.Earnings.map(earning =>
                        (
                            <div key={earning.Symbol} onClick={() => this.handleOnSelected(earning)}>
                                <div>{earning.Symbol}</div>
                            </div>
                        ))}
                </div>
            </div>);
    }
}

export default connector(EarningsList);



