import {onMounted, ref} from "vue";
import {Review} from "../types/Review.ts";
import ReviewService from "../services/ReviewService.ts";

export function useReviews() {
    const reviews = ref<Review[]>([]);

    const getReviews = async (): Promise<void> => {
        try {
            const {data} = await ReviewService.getReviews()
            reviews.value = data.slice(0, 5);
        } catch (e) {
            console.error(e);
        }
    }

    onMounted(async () => {
        await getReviews();
    })

    return {reviews};
}