import { connect, ConnectedProps } from "react-redux";
import React from "react";
import pApi from "../../data/PriceService";
import { setCurrentStockPrice, updateCurrentStockPrice } from "../../redux/actions"

const mapState = (state: RootState, ownProps: IPriceProps) =>
{
    let selectedStock = state.stocks.SelectedStock ?? "";
    return {
        SelectedStock: selectedStock,
        CurrentPrice: state.prices.Map[selectedStock]?.CurrentPrice
    }
}

const mapDispatch = { setCurrentStockPrice, updateCurrentStockPrice }

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = IPriceProps & PropsFromRedux;

class Price extends React.Component<Props, any>
{

    private async hydrate()
    {
        pApi.subscribeToLivePrice(this.props.SelectedStock, (update) => this.props.updateCurrentStockPrice(update.Symbol, update));
        let price = await pApi.getLastKnownPrice(this.props.SelectedStock);
        this.props.setCurrentStockPrice(this.props.SelectedStock, price)
    }

    async componentDidMount()
    {
        if (!this.props.SelectedStock.IsNullOrEmpty() && (this.props.CurrentPrice === null || this.props.CurrentPrice === undefined))
        {
            await this.hydrate();
        }
    }

    async componentDidUpdate(prevProps: Props)
    {
        if (!this.props.SelectedStock.IsNullOrEmpty() && this.props.SelectedStock !== prevProps.SelectedStock && (this.props.CurrentPrice === null || this.props.CurrentPrice === undefined))
        {
            await this.hydrate();
        }
    }

    render()
    {
        return (<div>${this.props.CurrentPrice}</div>)
    }
}

export default connector(Price);