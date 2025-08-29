<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-300">
    <div class="bg-white p-10 rounded-md shadow-md w-96 text-center">
      <h2 class="text-lg font-semibold mb-6">LOGIN</h2>

      <!-- Username -->
      <div class="mb-4 text-left">
        <label for="username" class="block text-sm mb-1">USERNAME</label>
        <input
          id="username"
          type="text"
          v-model="form.username"
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
import { navigateTo } from "#app";

const form = reactive({
  username: "",
  password: "",
});

const login = async () => {
  if (!form.username || !form.password) {
    return alert("Please fill in username and password");
  }

  try {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: {
        username: form.username,
        password: form.password,
      },
    });

    if (res.success) {
      switch (res.user.role) {
        case "superadmin":
          navigateTo("/dashboard/superadmin");
          break;
        case "admin":
          navigateTo("/dashboard/admin");
          break;
        case "kaprog":
          navigateTo("/dashboard/kaprog");
          break;
        case "pegawai":
          navigateTo("/dashboard/pegawai");
          break;
        default:
          navigateTo("/dashboard/index");
      }
    } else {
      alert(res.message || "Login failed");
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
};
</script>
