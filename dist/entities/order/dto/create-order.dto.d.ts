export declare class CreateOrderDto {
    id: number;
    user_id: number;
    unilevel_id: number;
    firstmatrix_id: number;
    secondmatrix_id: number;
    products_id: number;
    status: string;
    date: Date;
    item_subtotal: number;
    item_qty: number;
    discount: number;
    shipping: string;
    shipping_fee: number;
    isPaid: boolean;
    payment_method: string;
    tracking: string;
    createdAt: Date;
}
