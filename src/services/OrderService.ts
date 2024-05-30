import apiInstance from "@api/ApiInstance.ts";

const OrderService = {
    getOrders: async () => {
        try {
            const {data} = await apiInstance.get("/orders/mobile");
            return data;
         }catch (e) {
            console.log(e)
        }
    }

}

export default OrderService;