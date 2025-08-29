<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="bg-white shadow-md rounded-lg p-6 w-80 text-center">
      <!-- Garis atas kecil -->
      <div class="w-10 h-0.5 bg-black mx-auto mb-2"></div>

      <!-- Judul -->
      <h2 class="text-sm font-semibold mb-4">Profil Saya</h2>

      <!-- Foto Profil -->
      <img
        src="/images/profil.png"
        alt="Foto Profil"
        class="w-24 h-24 rounded-full object-cover mx-auto mb-4"
      />

      <!-- Email -->
      <p class="text-gray-600 text-sm">pakozan@gmail.com</p>

      <!-- Nama -->
      <h3 class="font-bold text-lg mt-1">Pak Ozan</h3>

      <!-- Jabatan -->
      <p class="text-xs text-gray-700 font-semibold mt-2">
        KEPALA SEKSI PENGEMBANGAN BIDANG INFORMATIKA
      </p>

      <!-- Instansi -->
      <p class="text-xs text-gray-500 mt-1">
        Dinas Komunikasi dan Informatika Provinsi Sumatera Utara
      </p>

      <!-- Garis bawah kecil -->
      <div class="w-full h-px bg-gray-300 mt-4"></div>

      <!-- Tombol Kembali -->
      <button
        @click="goDashboard"
        class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
      >
        ← Kembali ke Dashboard
      </button>
    </div>
  </div>
</template>

<script setup>
const goDashboard = () => {
  navigateTo('/dashboard')
}
</script>
