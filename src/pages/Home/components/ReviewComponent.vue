<script setup lang="ts">
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import {useReviews} from "../../../composables/useReviews.ts";

const {reviews} = useReviews();
</script>

<template>
  <div class="bg-gray-200 py-20 my-20">
    <h1 class="text-2xl text-center font-bold my-10">Customer Reviews</h1>
    <div class="mx-20 my-20">
      <Swiper
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :loop="false"
          class="mySwiper"
      >
        <SwiperSlide v-for="(review, index) in reviews" :key="index">
          <!-- Your review card goes here -->
          <div class="p-5 text-center  bg-gray-100 shadow rounded">
            <h1 class="capitalize">{{ review.userName }}</h1>
            <p>{{ review.comment }}</p>
            <p>{{ review.rating }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

</template>

<style scoped>

</style>