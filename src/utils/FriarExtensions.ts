/** @inheritdoc */
// eslint-disable-next-line
String.prototype.IsNullOrEmpty = function (this: string)
{
    return this === null || this === undefined || this.trim() === "";
}


export {};