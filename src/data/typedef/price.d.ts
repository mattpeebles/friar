interface IStockPrice
{
    High_Day: number;
    Low_Day: number;
    CurrentPrice: number;
    Open_Day: number;
    Close_Previous: number;
}

interface IStockPriceUpdate
{
    Symbol: string;
    CurrentPrice: number;
    Volume: number;
    Time: number;
}