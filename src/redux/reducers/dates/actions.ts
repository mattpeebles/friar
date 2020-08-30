import { SELECT_DATE, DateActions } from "./types";

export const selectDate = (date: Date): DateActions => ({
    type: SELECT_DATE,
    payload: {
        date
    }
})
