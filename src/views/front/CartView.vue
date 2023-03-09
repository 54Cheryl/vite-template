<template>
  <NavBar></NavBar>
  <div class="container">
    <h3 class="text-center mt-5">購物車列表</h3>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button" @click="deleteCarts()">清空購物車</button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th class="text-end">單價</th>
          <th class="text-end">小計</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart.carts">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="deleteCartItem(item)" :disabled="item.id === loadingItem">
                <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                x
              </button>
            </td>
            <td>
              {{ item.product.title }}
            </td>
            <td>
              <div class="input-group input-group-sm">
                <select name="" id="" class="form-select"
                  v-model="item.qty" @change="updateCartItem(item)" :disabled="item.id === loadingItem">
                  <option :value="i" v-for="i in 20" :key="`${i}45678`">{{i}}</option>
                </select>
                <div class="input-group-text">/ {{ item.product.unit }}</div>
              </div>
            </td>
            <td class="text-end">
              <small class="text-success" v-if="item.product.price !== item.product.origin_price">促銷價：</small>
              {{ item.product.price }}
            </td>
            <td class="text-end">
              {{ item.total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="text-end">總計</td>
          <td class="text-end">$ {{ cart.total }}</td>
        </tr>
        <tr v-if="cart.total !== cart.final_total">
          <td colspan="4" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">$ {{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm w-25 ms-auto">
      <input
        type="text"
        class="form-control"
        v-model="coupon_code"
        placeholder="請輸入優惠碼"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="addCouponCode"
          style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
        >
          套用優惠碼
        </button>
      </div>
    </div>
  </div>
  <div class="my-5 row justify-content-center">
    <h3 class="text-center mt-5">訂購資訊</h3>
    <VForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="請輸入 Email"
          :class="{ 'is-invalid': errors['email'] }"
          rules="email|required"
          v-model="form.user.email"
        ></VField>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <VField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></VField>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <VField
          id="tel"
          name="電話"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入手機號碼"
          :rules="isPhone"
          v-model="form.user.tel"
        ></VField>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <VField
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></VField>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </VForm>
  </div>
  <FrontFooter></FrontFooter>
</template>

<script>
import { Toast, Swal } from '@/methods/swalToast'
import NavBar from '@/components/NavBar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon_code: '',
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then(res => {
          this.cart = res.data.data
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
      this.$http.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`, { data })
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
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`)
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
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/carts`)
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
    },
    addCouponCode () {
      this.isLoading = true
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/coupon`, { data: coupon })
        .then((res) => {
          this.isLoading = false
          Toast.fire({
            icon: 'success',
            title: '套用優惠券'
          })
          this.getCarts()
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '須為正確的手機號碼 (ex：0912345678)'
    },
    createOrder () {
      const order = this.form
      this.$http.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/order`, { data: order })
        .then(res => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.$refs.form.resetForm()
          this.form.message = ''
          this.coupon_code = ''
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
  components: {
    NavBar,
    FrontFooter
  },
  mounted () {
    this.getCarts()
  }
}
</script>
