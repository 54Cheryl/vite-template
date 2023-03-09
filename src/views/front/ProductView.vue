<template>
  <NavBar></NavBar>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row mx-5">
      <div class="col-md-5">
        <div class="text-center overflow-hidden">
          <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover" height="450">
        </div>
        <div class="row my-4">
          <div class="col-4 text-center overflow-hidden">
            <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover" height="150">
          </div>
          <div class="col-4 text-center overflow-hidden" v-for="(imgItem, i) in product.imagesUrl" :key="i">
            <img :src="imgItem" class="card-img-top rounded-0 object-cover" height="150">
          </div>
        </div>
      </div>
      <div class="col-md-7 px-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 pb-3">
            <li class="breadcrumb-item"><a class="text-muted" href="#">Home</a></li>
            <li class="breadcrumb-item"><router-link to="/products" class="text-muted">產品列表Product</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-3">{{ product.title }}</h2>
        <p class="py-1 fs-6 m-0">{{ product.content }}</p>
        <p class="py-1 fs-6 m-0">{{ product.content }}</p>
        <p class="py-1 fs-6 m-0">{{ product.content }}</p>
        <p class="py-1 fs-6 m-0">{{ product.content }}</p>
        <p class="py-1 fs-6 m-0">{{ product.content }}</p>
        <p class="py-1 fs-6 m-0">{{ product.content }}</p>
        <div class="mt-3">
          <p class="fs-4 mb-0 text-muted"><del>NT$ {{ product.origin_price }}</del></p>
          <p class="fs-3 fw-bold">NT$ {{ product.price }}</p>
        </div>
        <div class="my-3">
          <p class="fs-5">數量</p>
          <select class="form-select" aria-label="Default select example">
            <option :value="i" v-for="i in 20" :key="`${i}45678`">{{i}}</option>
          </select>
        </div>
        <div class="row align-items-center">
          <div class="col-6">
            <button class="btn btn-outline-secondary ms-1 w-100">加入收藏</button>
          </div>
          <div class="col-6">
            <button class="btn btn-primary ms-1 w-100 text-white">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 mx-5 d-flex justify-content-between">
      <div class="accordion col-5 px-2">
        <h2 class="accordion-header">
          <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseDescription" aria-expanded="true" aria-controls="collapseExample">
            產品描述
          </button>
        </h2>
        <div class="collapse show" id="collapseDescription">
          <div class="card card-body border-0">
            {{product.description}}
          </div>
        </div>
      </div>
      <div class="accordion col-7 px-5">
        <h2 class="accordion-header">
          <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseDelivery" aria-expanded="true" aria-controls="collapseExample">
            送貨方式
          </button>
        </h2>
        <div class="collapse show" id="collapseDelivery">
          <div class="card card-body border-0">
            <ul>
              <li>新竹物流宅配</li>
              <li>黑貓宅配 (商品含茶點建議選用)</li>
              <li>黑貓宅配_貨到付款 (商品含茶點建議選用)</li>
              <li>7-11 取貨不付款</li>
              <li>7-11 取貨付款</li>
              <li>全家 取貨不付款</li>
              <li>全家 取貨付款</li>
              <li>跨境宅配</li>
              <li>7-11 跨境門市取貨不付款</li>
              <li>郵局航空包裹</li>
              <li>郵局宅配（台灣離島地區）</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter></FrontFooter>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
    }
  },
  components: {
    NavBar,
    FrontFooter
  },
  mounted () {
    this.getProduct()
  }
}
</script>
