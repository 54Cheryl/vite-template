import { defineStore } from 'pinia'
import axios from 'axios'
import { Toast, Swal } from '@/methods/swalToast'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: {},
      total: 0,
      final_total: 0,
      cartNum: 0
    }
  },
  actions: {
    getCart () {
      axios.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data.carts
          this.cartNum = res.data.data.carts.length
          this.total = res.data.data.total
          this.final_total = res.data.data.total
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      axios.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          this.getCart()
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
  getters: {}
})
export default cartStore
