<template>
  <div class="modal fade" id="couponModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="col">
              <label class="form-label mt-2" for="title">優惠券名稱</label>
              <input type="text" class="form-control" id="title" placeholder="請輸入名稱" v-model="tempCoupon.title">
            </div>
            <div class="col">
              <label class="form-label mt-2" for="coupon_code">優惠代碼</label>
              <input type="text" class="form-control" id="coupon_code" placeholder="請輸入代碼" v-model="tempCoupon.code">
            </div>
            <div class="col">
              <label class="form-label mt-2" for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date" v-model="due_date">
            </div>
            <div class="col">
              <label class="form-label mt-2" for="percent">折扣百分比</label>
              <input type="number" min="0" max="100" class="form-control" id="percent" placeholder="請輸入折扣百分比" v-model.number="tempCoupon.percent">
            </div>
            <div class="col my-3">
              <input type="checkbox" class="form-check-input" id="is_enabled" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
              <label class="form-label ms-2" for="is_enabled">是否啟用</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('update-coupon')">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    coupon: {},
    isNew: {}
  },
  data () {
    return {
      tempCoupon: {},
      modal: '',
      due_date: ''
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      if (this.tempCoupon.due_date) {
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T', 1)[0]
        this.due_date = dateAndTime
      }
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mixins: [modalMixin],
  emits: ['update-coupon']
}
</script>
