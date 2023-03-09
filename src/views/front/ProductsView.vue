<template>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage"></Loading>
  <NavBar></NavBar>
  <div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
      <h2 class="fw-bold">Lorem ipsum.</h2>
    </div>
    <div class="row mt-4">
      <div class="col-2">側欄</div>
      <div class="row col-10">
        <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover" height="250" alt="">
            <a href="#" class="text-dark">
              <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
            </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3">
                <router-link :to="`/product/${product.id}`" class="text-dark text-decoration-none">{{ product.title }}</router-link>
              </h4>
              <p class="card-text text-muted mb-0">{{ product.content }}</p>
              <p class="text-muted mt-3">NT$ {{ product.price }}</p>
            </div>
            <button class="btn btn-primary ms-1 text-white" @click="addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter></FrontFooter>
</template>

<script>
import { RouterLink } from 'vue-router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { Toast, Swal } from '@/methods/swalToast'
import NavBar from '@/components/NavBar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    RouterLink,
    Loading,
    NavBar,
    FrontFooter
  },
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
