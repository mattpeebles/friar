import { SELECT_DATE } from "./types";

export const selectDate = (content: Date) => ({
    type: SELECT_DATE,
    payload: {
        content
    }
})
