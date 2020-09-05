import { connect, ConnectedProps } from 'react-redux'
import React from "react";
import cApi from "../../../data/CompanyService";
import { addCompanyInfo } from "../../../redux/actions";

import "./ticker.scss";
import CompanyInfo from '../../company_info/CompanyInfo';

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

    async componentDidUpdate()
    {
        if (this.props.CompanyInfo === null || this.props.CompanyInfo === undefined)
        {
            let companyInfo = await cApi.getCompanyInfoBySymbol(this.props.SelectedStock);
            this.props.addCompanyInfo(this.props.SelectedStock, companyInfo);
        }
    }

    render()
    {
        return (
            <div className="ticker-container">
                <div className="ticker-header-container">
                    <div className="ticker-symbol">{this.props.SelectedStock}</div>
                    <div className="ticker-name">{this.props.CompanyInfo?.name}</div>
                </div>
                
                <div className="ticker-body">
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