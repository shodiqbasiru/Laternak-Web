<script setup lang="ts">
import LoginIllustration from '@assets/login-ilustration.svg';
import {FormLogin} from "@/types/FormLogin.ts";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import AuthServices from "@services/AuthServices.ts";

const authService = AuthServices();
const router = useRouter();

const form = ref<FormLogin>({
  username: '',
  password: ''
})

const handleLogin = async (event: Event): Promise<void> => {
  event.preventDefault();
  try {
    const response = await authService.loginSeller(form.value);
    if (response.statusCode === 200) {
      await router.push("dashboard-admin");
    }
  } catch (e) {
    console.error(e);
  }
}

// onMounted(() => {
//   if (localStorage.getItem('token')) {
//     router.push("dashboard-admin");
//   }
// });

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-96 bg-white p-5 rounded-lg shadow-lg">
      <div class="flex justify-center">
        <img :src="LoginIllustration" alt="Login Illustration" class="w-100 h-100"/>
      </div>
      <div class="mt-5">
        <h1 class="text-2xl font-bold text-center">Login</h1>
        <form class="mt-5" @submit.prevent="handleLogin">
          <InputGroup class="mb-6">
            <FloatLabel>
              <InputText v-model="form.username" id="username"/>
              <label for="username">Username</label>
              <InputGroupAddon>
                <i class="pi pi-user"></i>
              </InputGroupAddon>
            </FloatLabel>
          </InputGroup>
          <InputGroup class="mb-6">
            <FloatLabel>
              <Password v-model="form.password" input-id="password" toggle-mask :feedback="false"/>
              <label for="password">Password</label>
              <InputGroupAddon>
                <i class="pi pi-lock p-input-icon-left"></i>
              </InputGroupAddon>
            </FloatLabel>
          </InputGroup>
          <div class="flex flex-col items-center">
            <Button label="Login" class="w-full" type="submit"/>
            <p class="text-sm mt-2">Don't have an account?
              <router-link to="/register" class="text-sm text-amber-600 hover:underline">Register</router-link>
            </p>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>