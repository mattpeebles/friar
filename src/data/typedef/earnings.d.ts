interface IEarning
{
   date: string;
   epsActual: number;
   epsEstimate: number;
   hour: "bmo" | "amc";
   quarter: number;
   revenueActual: number;
   revenueEstimate: number;
   Symbol: string;
   year: number;
}