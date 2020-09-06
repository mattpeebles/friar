import React from "react";

export default class EarningRow extends React.Component<IEarningRowProps, any>
{
    render()
    {
        return (
            <div className="el-row">
                {this.props.Columns.map(col => (
                    <div key={`${this.props.Earning.Symbol}-${col}`}>
                        {this.props.ColumnMap[col](this.props.Earning)}
                    </div>
                ))}
            </div>
        )
    }
}