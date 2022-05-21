export interface Product {
    productID: number;
    productName: string;
    salesQ1?: number, 
    salesQ2?: number,
    salesQ3?: number,
    salesQ4?: number,
    productManager?: string,
    startDate?: Date
}
