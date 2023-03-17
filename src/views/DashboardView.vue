<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand pb-0" href="#">
        <img src="/src/assets/logo.svg" alt="" class="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-0">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link Serif-TC">產品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link Serif-TC">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link Serif-TC">優惠券管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link Serif-TC">回到前台</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <a href="#" @click.prevent="logout" class="nav-link Serif-TC py-2">登出</a>
        </form>
      </div>
    </div>
  </nav>
  <RouterView v-if="checkSuccess"></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
import { Toast, Swal } from '@/methods/swalToast'
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = 'cherylToken=; expires=;'
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)cherylToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        this.$http.post(`${VITE_APP_URL}api/user/check`, { api_token: this.token })
          .then((res) => {
            this.checkSuccess = true
            if (!res.data.success) {
              this.$router.push('/login')
            }
            Toast.fire({
              icon: 'success',
              title: '登入成功'
            })
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: err.response.data.message
            })
            this.$router.push('/login')
          })
      } else {
        Toast.fire({
          icon: 'warning',
          title: '請先登入'
        })
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<style>
@media screen and (max-width: 575px) {
  .backendBtn{
    margin-bottom: 5px;
  }
}
</style>
