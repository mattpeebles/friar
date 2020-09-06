import finnhubClient, { socket } from "./FinnHubClient"

export default class Api
{
    private static subscription?: { symbol: string; };

    public static async getEarningsByDateAsync(date: Date): Promise<IEarningsCalendarApiResponse>
    {
        return new Promise((resolve, reject) =>
        {
            //find a better way to do this. ugh
            let sDate = date.toISOString().split('T')[0];

            finnhubClient.earningsCalendar({ "from": sDate, "to": sDate }, (error: any, data: any, response: any) =>
            {
                //need to handle 429 errors
                resolve(data);
            });
        })
    }

    public static async getCompanyInfoBySymbol(symbol: string): Promise<IFinnhubCompanyInfo>
    {
        return new Promise((resolve, reject) =>
        {
            finnhubClient.companyProfile2({ 'symbol': symbol }, (error: any, data: IFinnhubCompanyInfo, response: any) =>
            {
                resolve(data);
            });
        })
    }

    public static async getLastKnownPrice(symbol: string): Promise<IStockPrice>
    {
        return new Promise((resolve, reject) =>
        {
            finnhubClient.quote(symbol, (error: any, data: IFinnhubQuote, response: any) =>
            {
                resolve(this.TranslatePrice(data));
            });
        })
    }

    public static getRealTimePrice(symbol: string, callback: (price: IStockPriceUpdate) => void)
    {
        //unsubscribe from existing ones
        if (this.subscription !== null && this.subscription !== undefined)
        {
            socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': this.subscription.symbol }))
            this.subscription = undefined;
        }


        // Connection opened -> Subscribe
        socket.addEventListener('open', function (event)
        {
            socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': symbol }))
        });

        // Listen for messages
        socket.addEventListener('message', (event: { data: IFinnhubPriceUpdate }) =>
        {
            let { data } = event;
            callback(this.TranslateUpdate(data));
          
        });

        this.subscription = { symbol }
    }


    private static TranslatePrice(price: IFinnhubQuote): IStockPrice
    {
        return {
            Close_Previous: price.pc,
            CurrentPrice: parseFloat(price.c?.toFixed(2)),
            High_Day: price.h,
            Low_Day: price.l,
            Open_Day: price.o
        }
    }

    private static TranslateUpdate(priceUpdate: IFinnhubPriceUpdate): IStockPriceUpdate
    {
        return {
            CurrentPrice: priceUpdate.p,
            Symbol: priceUpdate.s,
            Time: priceUpdate.t,
            Volume: priceUpdate.v
        }
    }
}
