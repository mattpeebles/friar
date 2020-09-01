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