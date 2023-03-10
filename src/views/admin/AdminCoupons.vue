<template>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage"></Loading>
  <div class="container">
    <div class="py-3">
      <h2>優惠券列表</h2>
      <div class="text-end">
        <button type="button" class="btn btn-primary text-light" @click="() => openCoupon('new', item)">建立新的優惠券</button>
      </div>
      <!-- 產品列表 -->
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th width="150">優惠券名稱</th>
            <th width="120">折扣百分比</th>
            <th width="120">到期日</th>
            <th width="120">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" v-bind:key="item.id">
            <td width="150">{{ item.title }}</td>
            <td width="120">{{ item.percent }}</td>
            <td width="120">
              {{ $filters.date(item.due_date) }}
            </td>
            <td width="120">
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td width="120">
              <button type="button" class="btn btn-outline-primary btn-sm me-2" @click="() => openCoupon('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="() => openCoupon('delete', item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <Pagination :pages="pagination" @change-page="getCoupons"></Pagination>
        </div>
        <div class="col">
          <p class="text-end">本頁有 <span>{{ coupons.length }}</span> 項產品</p>
        </div>
        <CouponModal
          :coupon="tempCoupon"
          :isNew="isNew"
          ref="couponModal"
          @update-coupon ="updateCoupon"
        ></CouponModal>
        <DelModal
          :temp-data="tempCoupon"
          ref="deleteModal"
          @del-data="deleteCoupon"
        ></DelModal>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import DelModal from '@/components/DelModal.vue'
import CouponModal from '@/components/CouponModal.vue'
import { Toast, Swal } from '@/methods/swalToast'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['token'],
  data () {
    return {
      coupons: [],
      pagination: {},
      isNew: false,
      tempCoupon: {},
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupons/?page=${page}`)
        .then((res) => {
          this.isLoading = false
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    openCoupon (event, item) {
      if (event === 'new') {
        this.isNew = true
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
        this.$refs.couponModal.showModal()
      } else if (event === 'edit') {
        this.isNew = false
        this.tempCoupon = { ...item }
        this.$refs.couponModal.showModal()
      } else if (event === 'delete') {
        this.tempCoupon = { ...item }
        this.$refs.deleteModal.showModal()
      }
    },
    updateCoupon () {
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon`
      let apiMethod = 'post'
      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        apiMethod = 'put'
      }
      this.$http[apiMethod](api, { data: this.tempCoupon })
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.tempCoupon = {}
          this.$refs.couponModal.hideModal()
          this.getCoupons()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    deleteCoupon () {
      const deleteUrl = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http.delete(deleteUrl)
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.$refs.deleteModal.hideModal()
          this.getCoupons()
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
    Loading,
    CouponModal
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
