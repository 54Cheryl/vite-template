<template>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage"></Loading>
  <div class="container">
    <div class="py-3">
      <h2>產品列表</h2>
      <div class="text-end">
        <button type="button" class="btn btn-primary text-light" @click="openProduct('new', item)">建立新的產品</button>
      </div>
      <!-- 產品列表 -->
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th width="150">產品名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="150">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" v-bind:key="item.id">
            <td width="120">{{ item.category }}</td>
            <td width="150">{{ item.title }}</td>
            <td width="120">
              {{ item.origin_price }}
            </td>
            <td width="120">
              {{ item.price }}
            </td>
            <td width="150">
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td width="120">
              <button type="button" class="btn btn-outline-primary btn-sm me-2" @click="openProduct('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openProduct('delete', item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
        </div>
        <div class="col">
          <p class="text-end">本頁有 <span>{{ products.length }}</span> 項產品</p>
        </div>
        <ProdModal
          :product="tempProduct"
          :isNew="isNew"
          ref="productModal"
          @update-product ="updateProduct"
          @cancel-product ="cancelProduct"
          @create-images ="createImages"
        ></ProdModal>
        <DelModal
          :temp-data="tempProduct"
          ref="deleteModal"
          @del-data="deleteProduct"
        ></DelModal>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import DelModal from '@/components/DelModal.vue'
import ProdModal from '@/components/ProdModal.vue'
import { Toast, Swal } from '@/methods/swalToast'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['token'],
  data () {
    return {
      products: [],
      pagination: {},
      isNew: false,
      tempProduct: {
        imagesUrl: [],
        tempImage: ''
      },
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products/?page=${page}`)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    openProduct (event, item) {
      if (event === 'new') {
        this.isNew = true
        this.tempProduct = { imagesUrl: [] }
        this.$refs.productModal.showModal()
      } else if (event === 'edit') {
        this.isNew = false
        this.tempProduct = { ...item }
        this.$refs.productModal.showModal()
      } else if (event === 'delete') {
        this.tempProduct = { ...item }
        this.$refs.deleteModal.showModal()
      }
    },
    cancelProduct () {
      this.tempProduct = { imagesUrl: [] }
      this.$refs.productModal.hideModal()
    },
    updateProduct () {
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product`
      let apiMethod = 'post'
      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        apiMethod = 'put'
      }
      this.tempProduct.tempImage = ''
      this.$http[apiMethod](api, { data: this.tempProduct })
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.tempProduct = {
            imagesUrl: [],
            tempImage: ''
          }
          this.$refs.productModal.hideModal()
          this.getProducts()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    createImages () {
      this.tempProduct.imagesUrl.push('')
    },
    deleteProduct () {
      const deleteUrl = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(deleteUrl)
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.$refs.deleteModal.hideModal()
          this.getProducts()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  components: {
    Pagination,
    DelModal,
    ProdModal,
    Loading
  },
  mounted () {
    this.getProducts()
  }
}
</script>
