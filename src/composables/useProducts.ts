import {ref} from "vue";
import {Product} from "../types/Product.ts";
import ProductServices from "../services/ProductServices.ts";

export function useProducts() {
    const products = ref<Product[]>([]);
    const imageBaseUrl = "http://localhost:8080";

    const getData = async (searchTerm: string, minPrice: number, maxPrice: number): Promise<void> => {
        try {
            const {data} = await ProductServices.getProducts(searchTerm, minPrice, maxPrice);
            products.value = data.slice(0, 10);
        } catch (e) {
            console.error(e);
        }
    }

    return {products, imageBaseUrl, getData};
}