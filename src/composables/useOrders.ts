import OrderService from "@services/OrderService.ts";
import {useQuery} from "@tanstack/vue-query";

export function useOrders() {

    const {data: orders, isLoading, error} = useQuery({
        queryKey: ['orders'],
        queryFn: OrderService.getOrders
    });

    const totalPrice = (data: any) => {
        return data.orderDetails.reduce((acc: number, item: any) => {
            return acc + item.price * item.qty;
        }, 0);
    };

    return {
        data: {orders},
        isLoading,
        error,
        totalPrice
    }
}