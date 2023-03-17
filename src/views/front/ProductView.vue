<template>
  <NavBar></NavBar>
  <div class="container mt-md-5" style="padding-top: 90px; padding-bottom: 6vh;">
    <div class="row mx-4">
      <div class="col-lg-5">
        <div class="text-center overflow-hidden">
          <img :src="mainImg" class="card-img-top rounded-0 object-cover mainImg">
        </div>
        <div class="row my-4">
          <div class="col-3 text-center overflow-hidden">
            <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover smImg" @click="() => showImg(product.imageUrl)">
          </div>
          <div class="col-3 text-center overflow-hidden" v-for="(imgItem, i) in product.imagesUrl" :key="i">
            <img :src="imgItem" class="card-img-top rounded-0 object-cover smImg" @click="() => showImg(imgItem)">
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 pb-3 Serif-TC">
            <li class="breadcrumb-item neutral-300"><router-link to="/products" class="text-muted">全部產品</router-link></li>
            <li class="breadcrumb-item neutral-300"><router-link to="/tea-intro" class="text-muted">茶品介紹</router-link></li>
            <li class="breadcrumb-item neutral-300"><router-link :to="`/category/${product.category}`" class="text-muted">{{product.category}}</router-link></li>
            <li class="breadcrumb-item active neutral-500" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-3 Serif-TC">{{ product.title }}</h2>
        <div class="d-flex mb-2">
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec">產地</p>
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1">{{ product.origin_place }}</p>
        </div>
        <div class="d-flex mb-2">
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec">品種</p>
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1">{{ product.variety }}</p>
        </div>
        <div class="d-flex mb-2">
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec">香氣</p>
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1">{{ product.aroma }}</p>
        </div>
        <div class="d-flex mb-2">
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec">滋味</p>
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1">{{ product.taste }}</p>
        </div>
        <div class="d-flex mb-2">
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec">茶乾</p>
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1">{{ product.tea_dried }}</p>
        </div>
        <div class="d-flex mb-2">
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec d-flex align-items-center">說明</p>
          <p class="card-text neutral-500 mb-0 Sans-TC px-3 py-1 w-75">{{ product.content }}</p>
        </div>
        <div class="mt-3 Sans-TC">
          <p class="fs-5 mb-0 text-muted" v-if="product.origin_price !== product.price"><del>NT$ {{ product.origin_price }}</del></p>
          <p class="fs-3 fw-bold text-primary">NT$ {{ product.price }}<span class="fs-5 mb-0"> /{{ product.unit }}</span></p>
        </div>
        <div class="my-3 col-12 col-md-6 qty-pe">
          <p class="fs-5 Serif-TC mb-2">數量</p>
          <div class="input-group align-items-center">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-custom p-2"
                :class="{ 'text-secondary': tempQty === 1 }"
                :disabled="tempQty === 1"
                @click="() => tempQty--"
              ><i class="fas fa-minus"></i></button>
            </div>
            <input
              type="number"
              class="form-control text-center p-2" placeholder=""
              style="border: 1px solid #292524;"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              v-model.number="tempQty"
              min="1"
            >
            <div class="input-group-append">
              <button
              class="btn btn-outline-custom p-2"
              @click="() => tempQty++"><i class="fas fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div class="row align-items-center p-0 pt-3">
          <div class="col-md-6 pb-3">
            <button class="btn btn-outline-n500 Serif-TC letter-spacing w-100">加入收藏</button>
          </div>
          <div class="col-md-6 pb-3">
            <button class="btn btn-custom Serif-TC letter-spacing w-100 text-white" @click="() => addToCart(product.id, tempQty)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 mx-4 row justify-content-between">
      <div class="accordion col-12 col-md-5 py-0 px-2">
        <h2 class="accordion-header">
          <button
          class="accordion-button Serif-TC fs-4 collapsed"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseDelivery" aria-expanded="false" aria-controls="collapseExample">
            送貨方式
          </button>
        </h2>
        <div class="collapse" id="collapseDelivery">
          <div class="card card-body border-0 Sans-TC px-0">
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
      <div class="accordion col-12 col-md-7 py-0 px-2">
        <h2 class="accordion-header">
          <button
          class="accordion-button Serif-TC fs-4"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseDescription" aria-expanded="true" aria-controls="collapseDescription">
            產品描述
          </button>
        </h2>
        <div class="collapse show" id="collapseDescription">
          <div class="card card-body border-0 Sans-TC">
            {{product.description}}
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
import { mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      tempQty: 1,
      mainImg: ''
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          this.mainImg = res.data.product.imageUrl
        })
    },
    ...mapActions(cartStore, ['addToCart']),
    showImg (url) {
      this.mainImg = url
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

<style>
.mainImg{
  height: 56vh;
}
.smImg{
  height: 13vh;
}
.qty-pe{
  padding-right: 0.75rem;
}
@media screen and (max-width: 991px) {
  .mainImg{
    height: 45vh;
  }
  .smImg{
    height: 12vh;
  }
}
@media screen and (max-width: 575px) {
  .mainImg{
    height: 32vh;
  }
  .smImg{
    height: 7vh;
  }
  .qty-pe{
    padding-right: 0rem;
  }
}
</style>
