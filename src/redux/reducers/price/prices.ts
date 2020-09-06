import { SET_CURRENT_STOCK_PRICE, UPDATE_CURRENT_STOCK_PRICE, PriceAction } from "./types";

const initialState: PriceReducerState = {
    Map: {}
};

export default function (state = initialState, action: PriceAction)
{
    switch (action.type)
    {
        case SET_CURRENT_STOCK_PRICE: {
            const { price, symbol } = action.payload;

            let updatedState: PriceReducerState = {
                ...state,
                Map: {
                    ...state.Map,
                    [symbol]: {
                        ...state.Map[symbol],
                        ...price
                    }
                }
            }

            return updatedState;
        }

        case UPDATE_CURRENT_STOCK_PRICE: {
            const { update, symbol } = action.payload;

            let updatedState: PriceReducerState = {
                ...state,
                Map: {
                    ...state.Map,
                    [symbol]: {
                        ...state.Map[symbol],
                        ...update
                    }
                }
            }

            return updatedState;
        }

        default:
            return state;
    }
}