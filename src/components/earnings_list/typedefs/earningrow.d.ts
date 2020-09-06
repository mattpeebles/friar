interface IEarningRowProps
{
    Earning: IEarning;
    Columns: string[]
    ColumnMap: EarningColMap
}

type EarningColMap = { [column: string]: (earning: IEarning) => string };