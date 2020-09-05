/** @inheritdoc */
// eslint-disable-next-line
String.prototype.IsNullOrEmpty = function (this: string)
{
    return this === null || this === undefined || this.trim() === "";
}


const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]



export { months };