<template>
  <Loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage"></Loading>
  <div class="container">
    <div class="py-3">
      <h2>訂單列表</h2>
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th width="120">購買時間</th>
            <th width="150">Email</th>
            <th width="200">購買品項</th>
            <th width="100">應付金額</th>
            <th width="100">是否付款</th>
            <th width="100" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in orders" v-bind:key="item.id">
            <td width="120">{{ $filters.date(item.create_at) }}</td>
            <td width="150">
              {{ item.user.email }}
            </td>
            <td width="200">
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i" class="row mb-1">
                  <span class="col">
                    {{ product.product.title }}
                  </span>
                  <span class="col">
                    數量 : {{ product.qty }} {{ product.product.unit }}
                  </span>
                </li>
              </ul>
            </td>
            <td width="100">
              $ {{ item.total }}
            </td>
            <td width="100">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td width="100" class="text-center">
              <button class="btn btn-outline-primary btn-sm me-2" @click="openOrder('edit', item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm" @click="openOrder('delete', item)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <Pagination :pages="pagination" @change-page="getOrders"></Pagination>
        </div>
        <div class="col">
          <p class="text-end">本頁有 <span>{{ orders.length }}</span> 張訂單</p>
        </div>
        <OrderModal
          :order="tempOrder"
          ref="orderModal"
          @update-order ="updateOrder"
          @cancel-order ="cancelOrder"
        ></OrderModal>
        <DelModal
          :temp-data="tempOrder"
          ref="deleteModal"
          @del-data="deleteOrder"
        ></DelModal>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import DelModal from '@/components/DelModal.vue'
import OrderModal from '@/components/OrderModal.vue'
import { Toast, Swal } from '@/methods/swalToast'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  props: ['token'],
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders/?page=${page}`)
        .then((res) => {
          this.isLoading = false
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    updatePaid (item) {
      if (item.is_paid) {
        const paidDate = new Date().toLocaleDateString()
        item.paid_date = paidDate
      } else {
        item.paid_date = ''
      }
      const paid = {
        is_paid: item.is_paid,
        paid_date: item.paid_date
      }
      Toast.fire({
        icon: 'success',
        title: '已更新訂單資訊'
      })
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${item.id}`
      this.$http.put(api, { data: paid })
        .then((res) => {
          this.getOrders()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    openOrder (event, item) {
      if (event === 'edit') {
        this.tempOrder = { ...item }
        // console.log(this.tempOrder.id)
        this.$refs.orderModal.showModal()
      } else if (event === 'delete') {
        this.tempOrder = { ...item }
        // console.log(this.tempProduct)
        this.$refs.deleteModal.showModal()
      }
    },
    cancelOrder () {
      this.tempOrder = {}
      this.$refs.OrderModal.hideModal()
    },
    updateOrder () {
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      if (this.tempOrder.is_paid) {
        const paidDate = new Date().toLocaleDateString()
        this.tempOrder.paid_date = paidDate
      } else {
        this.tempOrder.paid_date = ''
      }
      this.$http.put(api, { data: this.tempOrder })
        .then((res) => {
          this.$refs.orderModal.hideModal()
          this.tempOrder = {}
          this.getOrders()
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    deleteOrder () {
      const deleteUrl = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(deleteUrl)
        .then((res) => {
          this.$refs.deleteModal.hideModal()
          this.getOrders()
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
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
    OrderModal,
    Loading
  },
  mounted () {
    this.getOrders()
  }
}
</script>
