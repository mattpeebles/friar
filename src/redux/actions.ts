import { SELECT_DATE, ADD_EARNINGS_BY_DATE } from "./actionTypes";

export const selectDate = (content: Date) => ({
    type: SELECT_DATE,
    payload: {
        content 
    }
})


export const addEarningsByDate = (date: Date, content: IEarningsCalendarApiResponse) => ({
    type: ADD_EARNINGS_BY_DATE,
    payload: {
        date,
        content
    }
})