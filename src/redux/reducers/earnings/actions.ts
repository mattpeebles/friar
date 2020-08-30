import { ADD_EARNINGS_BY_DATE, EarningsActions } from "./types";


export const addEarningsByDate = (date: Date, content: IEarningsCalendarApiResponse): EarningsActions => ({
    type: ADD_EARNINGS_BY_DATE,
    payload: {
        date,
        content
    }
})