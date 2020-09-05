import React from "react";
import "./CompanyInfo.scss";
import { connect, ConnectedProps } from "react-redux";
import Grid from "../grid/Grid";
import SectionHeader from "../section_header/SectionHeader";

const mapState = (state: RootState, ownProps: ICompanyInfoProps) =>
{
    return { CompanyInfo: ownProps.CompanyInfo }
}


const mapDispatch = {}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = ICompanyInfoProps & PropsFromRedux;

class CompanyInfo extends React.Component<Props, any>
{


    render()
    {
        const info = this.props.CompanyInfo;
        //todo: convert numbers to string values appropriately

        if (info === null || info === undefined)
        {
            return (<div></div>)
        }

        let gridInfo: IGridProps = {
            Data: [
                {
                    Cell: { Title: "CEO", Value: info.ceo },
                    SortOrder: 0
                },
                {
                    Cell: { Title: "Employee Count", Value: info.employeeCount?.toLocaleString() },
                    SortOrder: 1
                },
                {
                    Cell: { Title: "Headquarters", Value: info.headquarters },
                    SortOrder: 2
                },
                {
                    Cell: { Title: "Founded", Value: info.founded?.getDate().toString() },
                    SortOrder: 3
                },
                {
                    Cell: { Title: "Market Cap", Value: info.marketCapitalization?.toString()  },
                    SortOrder: 4
                },
                {
                    Cell: { Title: "Price-Earnings Ratio", Value: info.peRatio?.toString() },
                    SortOrder: 5
                },
                {
                    Cell: { Title: "Dividend Yield", Value: info.dividendYield?.toString() },
                    SortOrder: 6
                },
                {
                    Cell: { Title: "Average Volume", Value: info.avgVol?.toString() },
                    SortOrder: 7
                },
            ]
        }

        return (
            <div className="ci-container">
                <SectionHeader Title="About" />
                <Grid {...gridInfo}/>
            </div>)
    }
}

export default connector(CompanyInfo);
