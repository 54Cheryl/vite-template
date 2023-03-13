<template>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage"></Loading>
  <NavBar></NavBar>
  <div style="padding-top: 90px; padding-bottom: 6vh;">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 180px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 1;"></div>
      <h2 class="fw-bold Serif-TC letter-spacing position-relative text-white mb-0">產品列表</h2>
    </div>
    <div class="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0 mb-0 pb-3">
          <li class="breadcrumb-item Serif-TC"><a class="neutral-300" href="/vite-template/#/">Home</a></li>
          <li class="breadcrumb-item Serif-TC"><router-link class="neutral-300" to="/tea-intro">茶品介紹</router-link></li>
          <li class="breadcrumb-item neutral-500 Serif-TC" aria-current="page">產品列表</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5" v-for="product in products" :key="product.id">
          <div class="card border-0 position-relative position-relative">
            <router-link :to="`/product/${product.id}`" class="text-decoration-none">
              <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover productsImg" alt="">
              <a href="#" class="text-danger">
                <!-- <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i> -->
              </a>
              <div class="card-body px-0 bg-all">
                <h4 class="mb-0 neutral-900 Serif-TC">
                  {{ product.title }}
                </h4>
                <p class="card-text neutral-500 mb-0 Sans-TC">{{ product.content }}</p>
                <p class="accent-color Sans-TC mb-0">NT$ {{ product.price }}</p>
              </div>
            </router-link>
          </div>
          <button class="btn btn-custom Serif-TC letter-spacing w-100" @click="addToCart(product.id)">加入購物車</button>
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
