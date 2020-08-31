import { ADD_EARNINGS_BY_DATE, EarningsActions } from "./types";


export const addEarningsByDate = (date: Date, content: IEarning[]): EarningsActions => ({
    type: ADD_EARNINGS_BY_DATE,
    payload: {
        date,
        content
    }
})