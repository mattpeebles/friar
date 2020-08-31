import finnhubClient from "./FinnHubClient"

export default class Api
{
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
}
