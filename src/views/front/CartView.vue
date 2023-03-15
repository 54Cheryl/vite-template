<template>
  <NavBar></NavBar>
  <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
    <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 0.8;"></div>
  </div>
  <div class="bg-all py-5">
    <div class="container">
      <h3 class="text-center Serif-TC mb-3">購物車列表</h3>
      <div class="text-end pb-md-3">
        <button class="btn btn-outline-accent Serif-TC" type="button" @click="() => deleteCarts()">清空購物車</button>
      </div>
      <table class="table table-hover align-middle">
        <thead class="Serif-TC">
          <tr>
            <th width="50"></th>
            <th width="150">品名</th>
            <th width="50">數量/單位</th>
            <th width="80" class="text-end">單價</th>
            <th width="80" class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="getCart.carts">
            <tr v-for="item in getCart.carts" :key="item.id">
              <td width="50">
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="() => deleteCartItem(item)" :disabled="item.id === loadingItem">
                  <i class="fas fa-spinner fa-pulse" v-if="loadingItem === item.id"></i>
                  x
                </button>
              </td>
              <td width="150" class="Sans-TC">
                {{ item.product.title }}
              </td>
              <td width="50" class="Sans-TC">
                <div class="input-group input-group-sm">
                  <select name="" id="" class="form-select"
                    v-model="item.qty" @change="updateCartItem(item)" :disabled="item.id === loadingItem">
                    <option :value="i" v-for="i in 20" :key="`${i}45678`">{{i}}</option>
                  </select>
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
                </div>
              </td>
              <td width="80" class="text-end Sans-TC">
                <small class="text-success" v-if="item.product.price !== item.product.origin_price">促銷價：</small>
                {{ item.product.price }}
              </td>
              <td width="80" class="text-end Sans-TC">
                {{ item.total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr class="Sans-TC">
            <td width="80" colspan="4" class="text-end">總計</td>
            <td width="80" class="text-end">$ {{ getCart.total }}</td>
          </tr>
          <tr class="Sans-TC" v-if="getCart.total !== getCart.final_total">
            <td width="80" colspan="4" class="text-end text-success">折扣價</td>
            <td width="80" class="text-end text-success">$ {{ getCart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <div class="col-lg-4 col-md-6 ms-auto">
        <div class="input-group mb-3 input-group-sm ms-auto">
          <input
            type="text"
            class="form-control Sans-TC"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
            style="border-top-left-radius: 0; border-bottom-left-radius: 0;"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-n500 Serif-TC"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-sec py-5">
    <div class="container">
      <VForm ref="form" class="col-md-10 m-auto" v-slot="{ errors }" @submit="createOrder">
        <h3 class="text-center mb-3 Serif-TC">訂購資訊</h3>
        <div class="mb-3">
          <label for="email" class=" form-label Serif-TC">Email</label>
          <VField
            id="email"
            name="email"
            type="email"
            class="form-control Sans-TC"
            placeholder="請輸入 Email"
            :class="{ 'is-invalid': errors['email'] }"
            rules="email|required"
            v-model="form.user.email"
          ></VField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class=" form-label Serif-TC">收件人姓名</label>
          <VField
            id="name"
            name="姓名"
            type="text"
            class="form-control Sans-TC"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class=" form-label Serif-TC">收件人電話</label>
          <VField
            id="tel"
            name="電話"
            type="text"
            class="form-control Sans-TC"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入手機號碼"
            :rules="isPhone"
            v-model="form.user.tel"
          ></VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class=" form-label Serif-TC">收件人地址</label>
          <VField
            id="address"
            name="地址"
            type="text"
            class="form-control Sans-TC"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></VField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class=" form-label Serif-TC">留言</label>
          <textarea
            id="message"
            class="form-control Sans-TC"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-outline-accent Serif-TC">送出訂單</button>
        </div>
      </VForm>
    </div>
  </div>
  <FrontFooter></FrontFooter>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
import { Toast, Swal } from '@/methods/swalToast'
import NavBar from '@/components/NavBar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon_code: 'couponAll8',
      loadingItem: ''
    }
  },
  computed: {
    ...mapState(cartStore, ['getCart'])
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'updateCartItem', 'deleteCartItem', 'deleteCarts']),
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
