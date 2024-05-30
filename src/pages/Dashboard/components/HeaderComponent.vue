<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router";

const user = ref({name: 'Muhammad Fulan'});
const menu = ref();

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/login')
};

const items = [
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          handleLogout();
        }
      }
    ]
  }
];

const router = useRouter();



const showMenu = (event: Event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <header class="bg-green-600 shadow-md p-4 flex justify-between items-center">
    <h1 class="text-white text-2xl font-bold">Welcome To LaTernak</h1>
    <div class="flex items-center">
      <span class="text-white mr-4">{{ user.name }}</span>
      <button
          class="cursor-pointer focus:outline-none"
          @click="showMenu"
          aria-controls="overlay_menu"
          aria-haspopup="true"
          type="button">
        <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png"
            alt="User Profile"
            class="w-10 h-10 object-cover rounded-full"/>
      </button>

      <Menu ref="menu" :model="items" :popup="true" id="overlay_menu"/>
    </div>
  </header>
</template>

<style scoped>
</style>