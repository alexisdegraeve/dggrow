export interface Column {
    header: string;
    field?: string;
    subHeaders?: [
        {header: string, field: string}
    ]
}
