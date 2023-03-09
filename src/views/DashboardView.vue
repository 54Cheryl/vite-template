<template>
  --後台頁面--
  <br>
  <router-link to="/admin/products">產品管理</router-link> |
  <router-link to="/admin/orders">訂單管理</router-link> |
  <router-link to="/admin/coupons">優惠券管理</router-link> |
  <router-link to="/">回到前台home</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <hr>
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
