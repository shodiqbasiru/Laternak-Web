import apiInstance from "../api/ApiInstance.ts";

const ReviewService = {
    async getReviews() {
        const {data} = await apiInstance.get('/reviews');
        return data;
    }
};


export default ReviewService;