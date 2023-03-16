<template>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage"></Loading>
  <NavBar></NavBar>
  <div class="bg-all" style="padding-top: 90px; padding-bottom: 6vh;">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 180px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 1;"></div>
    </div>
    <div class="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-all px-0 mb-0 pb-3">
          <li class="breadcrumb-item neutral-500 Serif-TC" aria-current="page">全部產品</li>
          <li class="breadcrumb-item dropdown Serif-TC">
            <a class="text-decoration-none neutral-300 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              茶品種類
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><router-link class="dropdown-item neutral-300" to="/tea-intro">茶品介紹</router-link></li>
              <li><a href="/#/category/紅茶" class="dropdown-item neutral-300">紅茶</a></li>
              <li><a href="/#/category/綠茶" class="dropdown-item neutral-300">綠茶</a></li>
              <li><a href="/#/category/青茶" class="dropdown-item neutral-300">青茶</a></li>
              <li><a href="/#/category/黑茶" class="dropdown-item neutral-300">黑茶</a></li>
            </ul>
          </li>
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
              <div class="card-body px-0 py-2">
                <h5 class="mb-0 neutral-900 Serif-TC text-center pb-2 pt-1">
                  {{ product.title }}
                </h5>
                <div class="d-flex px-2 mb-2">
                  <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center">品種</p>
                  <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10">{{ product.variety }}</p>
                </div>
                <div class="d-flex px-2 mb-2">
                  <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center">香氣</p>
                  <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10">{{ product.aroma }}</p>
                </div>
                <div class="d-flex px-2 mb-2">
                  <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center">滋味</p>
                  <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10">{{ product.taste }}</p>
                </div>
                <p class="accent-color Sans-TC mb-0 pt-2 fs-5 px-2">NT$ {{ product.price }}</p>
              </div>
            </router-link>
          </div>
          <button class="btn btn-custom Serif-TC letter-spacing w-100" @click="() => addToCart(product.id)">加入購物車</button>
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
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
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
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>
