import apiInstance from "../api/ApiInstance.ts";

const ProductServices = {
    getProducts: async (productName: string, minPrice: number, maxPrice: number) => {
        try {
            let params = new URLSearchParams();

            if (productName) {
                params.append("productName", productName);
            }
            if (minPrice) {
                params.append("minPrice", minPrice.toString());
            }
            if (maxPrice) {
                params.append("maxPrice", maxPrice.toString());
            }

            const {data} = await apiInstance.get("/products", {params: params});
            return data;
        } catch (e) {
            console.error(e);
        }
    }
};

export default ProductServices;