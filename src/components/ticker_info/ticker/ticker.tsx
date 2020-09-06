import { connect, ConnectedProps } from 'react-redux'
import React from "react";
import cApi from "../../../data/CompanyService";
import { addCompanyInfo } from "../../../redux/actions";

import "./ticker.scss";
import CompanyInfo from '../../company_info/CompanyInfo';
import Price from '../../price/Price';

const mapState = (state: RootState, ownProps: ITickerProps) =>
{
    let selectedStock = state.stocks.SelectedStock ?? "";
    return {
        SelectedStock: selectedStock,
        CompanyInfo: state.stocks.CompanyMap[selectedStock]
    }
}


const mapDispatch = { addCompanyInfo }

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = ITickerProps & PropsFromRedux;

class Ticker extends React.Component<Props, any>
{

    async componentDidUpdate(prevProps: Props)
    {
        if (this.props.CompanyInfo === null || this.props.CompanyInfo === undefined)
        {
            let companyInfo = await cApi.getCompanyInfoBySymbol(this.props.SelectedStock);
            this.props.addCompanyInfo(this.props.SelectedStock, companyInfo);
        }
    }



    render()
    {

        if (this.props.SelectedStock.IsNullOrEmpty())
        {
            return (<div></div>);
        }

        return (
            <div className="ticker-container">
                <div className="ticker-header-container">
                    <div className="ticker-symbol">{this.props.SelectedStock}</div>
                    <div className="ticker-name">{this.props.CompanyInfo?.name}</div>
                    <Price />
                </div>

                <div className="ticker-body">
                    <a href={`https://robinhood.com/stocks/${this.props.SelectedStock}`} target="_blank" rel="noreferrer noopener">Robinhood</a>
                    <a href={`https://finance.yahoo.com/quote/${this.props.SelectedStock}`} target="_blank" rel="noreferrer noopener">YahooFinance</a>

                    <div className="ticker-company-info-container">
                        {this.props.CompanyInfo !== null && this.props.CompanyInfo !== undefined &&
                            <CompanyInfo CompanyInfo={this.props.CompanyInfo} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connector(Ticker);