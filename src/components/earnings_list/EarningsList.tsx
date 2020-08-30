import { connect, ConnectedProps } from 'react-redux'
import React from 'react';
import "./EarningsList.scss";

const mapState = (state: RootState, ownProps: IEarningsListProps) =>
{
    return { SelectedDate: state.dates.selectedDate }
}


const mapDispatch = {}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = IEarningsListProps & PropsFromRedux;



class EarningsList extends React.Component<Props, any>
{
    render()
    {
        return (
            <div className="el-container">
                <div className="el-date">{this.props.SelectedDate?.toDateString()}</div>
            </div>);
    }
}

export default connector(EarningsList);
