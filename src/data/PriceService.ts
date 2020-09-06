import fApi from "./finnhub/FinnhubApiService"

export default class Api
{

    public static async getLastKnownPrice(symbol: string): Promise<IStockPrice>
    {
        let price = await fApi.getLastKnownPrice(symbol);
        return price;
    }

    public static subscribeToLivePrice(symbol: string, callback: (price: IStockPriceUpdate) => void)
    {
        return fApi.getRealTimePrice(symbol, callback);
    }
}