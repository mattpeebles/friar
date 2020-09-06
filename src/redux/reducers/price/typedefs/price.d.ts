interface PriceReducerState
{
    Map: { [symbol: string]: IStockPriceState }
}


interface IStockPriceState extends IStockPrice, IStockPriceUpdate
{
}