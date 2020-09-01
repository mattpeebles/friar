interface StockReducerState
{
    SelectedStock: string;
    CompanyMap: { [symbol: string]: ICompanyInfo }
}
