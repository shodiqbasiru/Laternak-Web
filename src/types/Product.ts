export interface Product {
    id: string;
    images: { url: string; name: string }[];
    productName: string;
    price: number;
    isActive: boolean;
}