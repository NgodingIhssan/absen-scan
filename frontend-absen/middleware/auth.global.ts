// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()

  if (!auth.isLoggedIn && to.path !== '/login') {
    return navigateTo('/login')
  }
})
