import { connect, ConnectedProps } from 'react-redux'
import React from "react";
import "./ticker.scss";

const mapState = (state: RootState, ownProps: ITickerProps) =>
{
    return { SelectedStock: state.stocks.SelectedStock ?? "" }
}


const mapDispatch = {}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = ITickerProps & PropsFromRedux;

class Ticker extends React.Component<Props, any>
{
    render()
    {
        return (
            <div className="ticker-container">
                <div className="ticker-header">
                    {this.props.SelectedStock}
                </div>
            </div>
        );
    }
}

export default connector(Ticker);