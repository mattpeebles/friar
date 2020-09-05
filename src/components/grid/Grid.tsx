import React from "react";
import "./Grid.scss";
import GridCell from "./GridCell";

export default class Grid extends React.Component<IGridProps, any>{

    render()
    {
        let info = this.props.Data;
        return (
        <div className="g-container">
            {info?.sort(_ => _.SortOrder).map(si => (<GridCell key={si.SortOrder} {...si?.Cell} />))}
        </div>)
    }
}