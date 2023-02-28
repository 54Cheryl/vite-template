<template>
  <div>
    <div class="container">
      <div class="row py-3">
        <div class="col">
          <h2>後台訂單列表</h2>
          <!-- 產品列表 -->
          <table class="table table-hover mt-4">
            <thead>
              <tr>
                <th width="120">訂單編號</th>
                <th width="150">訂單id</th>
                <th width="120">
                  是否付款
                </th>
                <th width="120">
                  留言
                </th>
                <th width="150">
                  訂單商品
                </th>
                <th width="150">
                  訂單人資訊
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in orders" v-bind:key="item.id">
                <td width="120">{{ item.create_at }}</td>
                <td width="150">{{ item.id }}</td>
                <td width="120">
                  {{ item.is_paid }}
                </td>
                <td width="120">
                  {{ item.message }}
                </td>
                <td width="150">
                  {{ item.products }}
                </td>
                <td width="150">
                  {{ item.user }}
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  props: ['token'],
  data () {
    return {
      orders: [],
      pagination: {}
    }
  },
  methods: {
    // #5 取得後台產品列表
    getOrders (page = 1) { // 參數預設值
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders/?page=${page}`)
        .then((res) => {
          // console.log(res.data);
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          // console.dir(err);
          alert(err.response.data.message)
        })
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.getOrders()
  }
}
</script>
