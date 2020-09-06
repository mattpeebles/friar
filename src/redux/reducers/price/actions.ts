import
{
    SET_CURRENT_STOCK_PRICE,
    UPDATE_CURRENT_STOCK_PRICE,
    PriceAction
} from "./types";


export const setCurrentStockPrice = (symbol: string, price: IStockPrice): PriceAction => ({
    type: SET_CURRENT_STOCK_PRICE,
    payload: {
        price,
        symbol
    }
})


export const updateCurrentStockPrice = (symbol: string, update: IStockPriceUpdate): PriceAction => ({
    type: UPDATE_CURRENT_STOCK_PRICE,
    payload: {
        update,
        symbol
    }
})