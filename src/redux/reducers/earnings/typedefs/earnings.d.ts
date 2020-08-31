interface EarningsReducerState
{
    EarningsByDate: { [key: string]: EarningsInfo }
}

interface EarningsInfo
{
    Earnings: IEarning[];
    EarningsCount: number;
}