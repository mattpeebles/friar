export const SELECTED_STOCK = "SELECTED_STOCK";
export const ADD_COMPANY_INFO = "ADD_COMPANY_INFO"

export interface SelectedStockAction
{
    type: typeof SELECTED_STOCK
    payload: ISelectedStockPayload

}

export interface AddCompanyInfo
{
    type: typeof ADD_COMPANY_INFO,
    payload: IAddCompanyInfoPayload
}

export interface ISelectedStockPayload
{ symbol: string }

export interface IAddCompanyInfoPayload
{
    symbol: string;
    info: ICompanyInfo;
}

export type StockAction = SelectedStockAction | AddCompanyInfo;
