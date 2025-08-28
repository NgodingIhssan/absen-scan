<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-300">
    <div class="bg-white p-10 rounded-md shadow-md w-96 text-center">
      <h2 class="text-lg font-semibold mb-6">LOGIN</h2>

      <!-- Email -->
      <div class="mb-4 text-left">
        <label for="email" class="block text-sm mb-1">EMAIL</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          class="w-full p-2 bg-red-300 rounded-sm focus:outline-none"
        />
      </div>

      <!-- Password -->
      <div class="mb-6 text-left">
        <label for="password" class="block text-sm mb-1">PASSWORD</label>
        <input
          id="password"
          type="password"
          v-model="form.password"
          class="w-full p-2 bg-red-300 rounded-sm focus:outline-none"
        />
      </div>

      <!-- Button -->
      <button
        @click="login"
        class="px-6 py-2 bg-[#265d72] text-white font-semibold hover:bg-[#1e4a5b] transition"
      >
        LOGIN
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  Email: "",
  password: "",
});

const login = () => {
  if (form.email && form.password) {
    navigateTo("/dashboard");
  } else {
    alert("Please fill in email and password");
  }
};
</script>
