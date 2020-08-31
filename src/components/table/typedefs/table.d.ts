interface ITableProps
{
    Data: any[];
    Rows: string[];
    TableHeader: string;
    OnSelected: (item: any) => void;
}