// composables/useAuth.ts
export const useAuth = () => {
  const user = useState('user', () => null) // state global untuk user

  const login = (username: string) => {
    user.value = { name: username } // contoh: simpan data user
  }

  const logout = () => {
    user.value = null
  }

  const isLoggedIn = computed(() => !!user.value)

  return {
    user,
    login,
    logout,
    isLoggedIn
  }
}
