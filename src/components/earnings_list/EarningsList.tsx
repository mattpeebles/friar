import { connect, ConnectedProps } from 'react-redux'
import React from 'react';
import "./EarningsList.scss";
import { selectStockSymbol } from "../../redux/actions";

const mapState = (state: RootState, ownProps: IEarningsListProps) =>
{
    return {
        SelectedSymbol: state.stocks.SelectedStock,
        SelectedDate: state.dates.selectedDate, 
        Earnings: state?.earnings?.EarningsByDate[state?.dates?.selectedDate?.toISOString() ?? ""]?.Earnings ?? []
    }
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
        let columnList = ["Symbol", "Revenue Actual"]
        let columnMap: EarningColMap = {
            "Symbol": (er) => er.Symbol,
            "Revenue Actual": (er) => er.revenueActual.toString()
        }

        let style = {
            "gridTemplateColumns": columnList.map(col => `calc(${100 / columnList.length}%)`).join(" ")
        }

        return (
            <div className="el-container">
                <div>{this.props.SelectedDate?.toDateString()}</div>

                <div >
                    <div className="el-row" style={style}>
                        {columnList.map(col => (
                            <div className="el-cell" key={col}>
                                {col}
                            </div>
                        ))}
                    </div>
                    {this.props.Earnings.map(earning =>
                        (
                            <div className={`el-stock-row el-row${earning.Symbol === this.props.SelectedSymbol ? " selected" : ""}`} style={style} onClick={() => this.handleOnSelected(earning)} key={earning.Symbol}>
                                {columnList.map(col => (
                                    <div className="el-cell" key={`${earning.Symbol}-${col}`}>
                                        {columnMap[col](earning)}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>);
    }
}

export default connector(EarningsList);



