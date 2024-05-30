import {ref} from "vue";
import ProductServices from "@services/ProductServices.ts";
import {Product} from "@/types/Product.ts";

export function useProducts() {
    const products = ref<Product[]>([]);
    const imageBaseUrl = "http://localhost:8080";


    const getTenData = async (searchTerm: string, minPrice: number, maxPrice: number): Promise<void> => {
        try {
            const {data} = await ProductServices.getProducts(searchTerm, minPrice, maxPrice);
            products.value = data.slice(0, 10);
        } catch (e) {
            console.error(e);
        }
    }
    const getAllData = async (searchTerm: string, minPrice: number, maxPrice: number): Promise<void> => {
        try {
            const {data} = await ProductServices.getProducts(searchTerm, minPrice, maxPrice);
            products.value = data;
        } catch (e) {
            console.error(e);
        }
    }

    const postProduct = async (product: FormData) => {
        try {
            return await ProductServices.postProduct(product);
        } catch (e) {
            console.error(e);
        }
    }

    return {products, imageBaseUrl, getTenData, getAllData, postProduct};
}