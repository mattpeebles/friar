interface EarningsReducerState
{
    EarningsByDate: { [key: string]: EarningsInfo }
}

interface EarningsInfo
{
    Earnings: IEarningsCalendarApiResponse;
    EarningsCount: number;
}