export const SET_CURRENT_STOCK_PRICE = "SET_CURRENT_STOCK_PRICE";
export const UPDATE_CURRENT_STOCK_PRICE = "UPDATE_CURRENT_STOCK_PRICE";

export interface SetCurrentStockPriceAction
{
    type: typeof SET_CURRENT_STOCK_PRICE
    payload: SetCurrentStockPricePayload
}

export interface UpdateCurrentStockPriceAction
{
    type: typeof UPDATE_CURRENT_STOCK_PRICE
    payload: UpdateCurrentStockPricePayload

}

export interface SetCurrentStockPricePayload
{ price: IStockPrice, symbol: string }

export interface UpdateCurrentStockPricePayload
{ update: IStockPriceUpdate, symbol: string; }

export type PriceAction = SetCurrentStockPriceAction | UpdateCurrentStockPriceAction;
