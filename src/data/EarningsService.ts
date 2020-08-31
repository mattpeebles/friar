import fApi from "./finnhub/FinnhubApiService"

export default class Api
{
    public static async getEarningsByDateAsync(date: Date): Promise<IEarning[]>
    {
        const apiResponse = await fApi.getEarningsByDateAsync(date);
        return this.TranslateERCalendarResponse(apiResponse);
    }

    private static TranslateERCalendarResponse(erResponse: IEarningsCalendarApiResponse): IEarning[]
    {
        return erResponse.earningsCalendar.map(this.TranslateEarning);
    }

    private static TranslateEarning(earning: IFinnhubEarning): IEarning
    {
        let result : IEarning = {
            date: earning.date,
            epsActual: earning.epsActual,
            epsEstimate: earning.epsEstimate,
            hour: earning.hour,
            quarter: earning.quarter,
            revenueActual: earning.revenueActual,
            revenueEstimate: earning.revenueEstimate,
            Symbol: earning.symbol,
            year: earning.year
        };

        return result;
    }
}