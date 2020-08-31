export const SELECTED_STOCK = "SELECTED_STOCK";


export interface SelectedStockAction
{
    type: typeof SELECTED_STOCK
    payload: ISelectedStockPayload

}

export interface ISelectedStockPayload
{ symbol: string }

export type StockAction = SelectedStockAction;
