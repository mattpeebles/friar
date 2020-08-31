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