<template>
  <div class="min-h-screen bg-gray-200 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full">
      <!-- Header Section -->
      <div class="bg-gray-50 px-6 py-8 text-center">
        <h2 class="text-lg font-semibold text-gray-800 mb-6">Profil Saya</h2>
        
        <!-- Profile Image -->
        <div class="mb-4">
          <img 
            :src="profileData.avatar" 
            :alt="profileData.name"
            class="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-md"
          >
        </div>
        
        <!-- Email -->
        <p class="text-sm text-gray-600 mb-2">{{ profileData.email }}</p>
        
        <!-- Name -->
        <h3 class="text-xl font-bold text-gray-800 mb-4">{{ profileData.name }}</h3>
        
        <!-- Job Title -->
        <p class="text-sm text-gray-700 font-medium uppercase tracking-wider">
          {{ profileData.jobTitle }}
        </p>
      </div>
      
      <!-- Description Section -->
      <div class="px-6 py-6 text-center">
        <p class="text-sm text-gray-600 leading-relaxed">
          {{ profileData.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define reactive data
const profileData = reactive({
  name: 'Pak Ozan',
  email: 'pakozan@gmail.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  jobTitle: 'Kepala Pembangunan Bisnis Informatika',
  description: 'Guru konsultasi dan informatika medical Indonesia Jawa'
})

// Nuxt 4 metadata
useHead({
  title: 'Profil Saya - Pak Ozan',
  meta: [
    { name: 'description', content: 'Profile card untuk Pak Ozan - Kepala Pembangunan Bisnis Informatika' }
  ]
})
</script>

<style scoped>
/* Additional custom styles if needed */
.profile-card {
  transition: all 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>