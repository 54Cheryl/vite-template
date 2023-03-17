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
          <li class="breadcrumb-item text-primary Serif-TC" aria-current="page">全部產品</li>
          <li class="breadcrumb-item Serif-TC"><router-link class="neutral-300 text-decoration-none" to="/tea-intro">茶品介紹</router-link></li>
          <li class="breadcrumb-item dropdown Serif-TC">
            <a class="text-decoration-none neutral-300 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              茶品類別
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><router-link to="/category/紅茶" class="dropdown-item neutral-300">紅茶</router-link></li>
              <li><router-link to="/category/綠茶" class="dropdown-item neutral-300">綠茶</router-link></li>
              <li><router-link to="/category/青茶" class="dropdown-item neutral-300">青茶</router-link></li>
              <li><router-link to="/category/黑茶" class="dropdown-item neutral-300">黑茶</router-link></li>
            </ul>
          </li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 d-flex align-items-stretch justify-content-center" v-for="product in products" :key="product.id">
          <div class="card border-0 rounded-0 position-relative" style="width: 18rem;">
            <a href="#" class="text-danger">
              <!-- <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i> -->
            </a>
            <router-link :to="`/product/${product.id}`" class="card-body d-flex flex-column text-decoration-none p-0">
              <img :src="product.imageUrl" class="card-img-top object-cover productsImg" alt="Card Image">
              <h5 class="mb-0 neutral-900 Serif-TC text-center pb-2 pt-1">
                {{ product.title }}
              </h5>
              <div class="p-1">
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
              </div>
              <div class="flex-grow-1 d-flex align-items-end">
                <p class="accent-color Sans-TC mb-0 px-3 py-1 fs-5">NT$ {{ product.price }}</p>
              </div>
            </router-link>
            <button class="btn btn-custom Serif-TC letter-spacing w-100" @click="() => addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
      <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
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
import Pagination from '@/components/PaginationView.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    RouterLink,
    Loading,
    NavBar,
    FrontFooter,
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/?page=${page}`)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>
