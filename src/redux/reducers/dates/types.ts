export const SELECT_DATE = "SELECT_DATE";

export interface SelectDateAction
{
    type: typeof SELECT_DATE
    payload: ISelectDateActionPayload

}

export interface ISelectDateActionPayload
{ date: Date }

export type DateActions = SelectDateAction;
