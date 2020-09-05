import fApi from "./finnhub/FinnhubApiService"

export default class Api
{
    public static async getCompanyInfoBySymbol(symbol: string): Promise<ICompanyInfo>
    {
        const apiResponse = await fApi.getCompanyInfoBySymbol(symbol);
        return this.TranslateCompanyInfo(apiResponse);
    }

    private static TranslateCompanyInfo(info: IFinnhubCompanyInfo): ICompanyInfo
    {
        let result: ICompanyInfo = {
            country: info.country,
            currency: info.currency,
            exchange: info.exchange,
            ipo: info.ipo,
            logo: info.logo,
            marketCapitalization: info.marketCapitalization,
            name: info.name,
            phone: info.phone,
            shareOutstanding: info.shareOutstanding,
            ticker: info.ticker,
            weburl: info.weburl,
        };

        return result;
    }
}