/** @inheritdoc */
// eslint-disable-next-line
String.prototype.IsNullOrEmpty = function (this: string)
{
    return this === null || this === undefined || this.trim() === "";
}

class Constants
{
    static Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
}


class Util
{
    public static addDays(date: Date, days: number): Date 
    {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    }
}



export { Constants, Util };