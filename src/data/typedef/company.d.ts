interface ICompanyInfo
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
   
   description?: string;
   ceo?: string;
   employeeCount?: number;
   headquarters?: string;
   founded?: Date;
   peRatio?: number;
   dividendYield?: number;
   avgVol?: number;
}