<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-300">
    <div class="bg-white p-8 rounded shadow-md w-96 text-center">
      <h1 class="text-lg font-semibold mb-6">LOGIN</h1>

      <form class="space-y-4">
        <!-- Email -->
        <div class="text-left">
          <label class="block text-xs font-medium text-gray-700 mb-1">EMAIL</label>
          <input
            type="email"
            class="w-full px-3 py-2 border rounded bg-red-300 focus:outline-none"
            placeholder="Masukkan email"
          />
        </div>

        <!-- Password -->
        <div class="text-left">
          <label class="block text-xs font-medium text-gray-700 mb-1">PASSWORD</label>
          <input
            type="password"
            class="w-full px-3 py-2 border rounded bg-red-300 focus:outline-none"
            placeholder="Masukkan password"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full py-2 bg-slate-700 text-white font-semibold rounded hover:bg-slate-800"
        >
          LOGIN
        </button>
      </form>
    </div>
  </div>
</template>
