import React from "react";
import "./GridCell.scss";

export default class GridCell extends React.Component<IGridCellProps, any>
{
    render()
    {
        let value = this.props.Value;
      
        if (value === null || value === undefined || value.trim() === "")
        {
            value = "—";
        }

        return (
            <div className="gc-container">
                <div className="gc-title">{this.props.Title}</div>
                <div className="gc-value">{value}</div>
            </div>
        )
    }
}