declare module 'finnhub';


interface IEarningsCalendarApiResponse
{
    earningsCalendar: IFinnhubEarning[];
}

interface IFinnhubEarning
{
    date: string;
    epsActual: number;
    epsEstimate: number;
    hour: "bmo" | "amc";
    quarter: number;
    revenueActual: number;
    revenueEstimate: number;
    symbol: string;
    year: number;
}

interface IFinnhubCompanyInfo
{
    country: string;
    currency: string;
    exchange: string;
    ipo: string;
    marketCapitalization: number;
    name: string;
    phone: string;
    shareOutstanding: number;
    ticker: string;
    weburl: string;
    logo: string;
    finnhubIndustry: string;
}

interface IFinnhubQuote
{
    /** Open price of the day */
    o: number;

    /** High price of the day */
    h: number;

    /**Low price of the day*/
    l: number;

    /**Current price*/
    c: number;

    /**Previous close price */
    pc: number;
}

interface IFinnhubPriceUpdate
{
    /** Symbol. */
    s: string;
    
    /**  Last price. */
    p: number;
    
    /** UNIX milliseconds timestamp. */
    t: number;
    
    /** Volume. */
    v: number;
}