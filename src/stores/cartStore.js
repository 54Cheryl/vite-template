import { defineStore } from 'pinia'
import axios from 'axios'
import { Toast, Swal } from '@/methods/swalToast'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const cartStore = defineStore('cart', {
  state: () => {
    return {
      cart: {},
      cartNum: 0
    }
  },
  actions: {
    getCarts () {
      axios.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data
          this.cartNum = res.data.data.carts.length
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
          this.getCarts()
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
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      axios.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.getCarts()
          this.loadingItem = ''
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    deleteCartItem (item) {
      this.loadingItem = item.id
      axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.getCarts()
          this.loadingItem = ''
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    deleteCarts () {
      axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/carts`)
        .then(res => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.getCarts()
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  },
  getters: {
    getCart: ({ cart }) => {
      return cart
    }
  }
})
export default cartStore
