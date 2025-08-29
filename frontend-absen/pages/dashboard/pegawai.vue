<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-300 p-4 flex flex-col">
      <!-- Tempat Logo -->
      <div class="flex items-center justify-center h-20 mb-6">
        <img src="/images/logo wikrama.jpg" alt="Logo" class="h-12 w-12" />
      </div>

      <!-- Menu -->
      <nav class="flex flex-col space-y-4">
        <a href="/dashboard" class="p-2 rounded hover:bg-gray-400">Dashboard</a>
        <a href="/reports" class="p-2 rounded hover:bg-gray-400">My Reports</a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-8 flex justify-center items-center">
      <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <!-- Welcome -->
        <div class="flex justify-between items-center mb-6 relative">
          <div>
            <h2 class="text-lg font-bold">WELCOME, Ozan</h2>
            <p class="text-sm text-gray-600">INFORMATIKA</p>
          </div>

          <!-- Avatar dengan Dropdown -->
          <div class="relative" @click="toggleDropdown">
            <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
              <span class="text-gray-600 font-bold">O</span>
            </div>

            <!-- Dropdown Menu -->
            <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10"
        >
          <NuxtLink
            to="/profil/profilpegawai"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Profile
          </NuxtLink>
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>

         </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-200 p-4 rounded-lg text-center">
            <p class="text-2xl font-bold">6</p>
            <p class="text-sm text-gray-700">Present</p>
          </div>
          <div class="bg-gray-200 p-4 rounded-lg text-center">
            <p class="text-2xl font-bold">0</p>
            <p class="text-sm text-gray-700">Late</p>
          </div>
          <div class="bg-gray-200 p-4 rounded-lg text-center">
            <p class="text-2xl font-bold">1</p>
            <p class="text-sm text-gray-700">On Leave</p>
          </div>
        </div>

        <!-- Clock -->
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold">{{ time }}</h1>
          <p class="text-sm text-gray-500">You have not checked in today</p>
        </div>

        <!-- Buttons -->
        <div class="flex justify-center gap-4">
          <button
            class="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Check In
          </button>
          <button
            class="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Check Out
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const time = ref('')
const dropdownOpen = ref(false)

let interval = null

// Update clock function
const updateClock = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  updateClock()
  interval = setInterval(updateClock, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval) // biar gak memory leak
})

// Toggle dropdown
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Logout action (dummy)
const logout = () => {
  alert('Logout berhasil!') // nanti bisa diganti route / API logout
}
</script>
