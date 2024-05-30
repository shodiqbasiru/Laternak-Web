export interface Order{
    id: string;
    userId: string;
    customerName: string;
    address: string;
    orderDate: string;
    orderDetails: OrderDetail[];
    paymentResponse: Payment;
}

export interface OrderDetail{
    id: string;
    price: number;
    qty: number;
    productId: string;
    productName: string;
}

export interface Payment{
    id: string;
    token: string;
    redirectUrl: string;
    transactionStatus: string;
}
