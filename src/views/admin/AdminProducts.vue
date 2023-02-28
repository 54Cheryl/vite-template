<template>
  <div class="container">
    <div class="row py-3">
      <div class="col">
        <h2>產品列表</h2>
        <div class="text-end">
          <button type="button" class="btn btn-primary text-light" @click="openModal('new', item)">建立新的產品</button>
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
                <button type="button" class="btn btn-outline-primary btn-sm me-2" @click="openModal('edit', item)">編輯</button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row">
          <div class="col">
            <Pagination :pages="pagination" @change-page="getData"></Pagination>
          </div>
          <div class="col">
            <p class="text-end">本頁有 <span>{{ products.length }}</span> 項產品</p>
          </div>
          <DelModal :temp-product="tempProduct" ref="deleteModal" @del-product="deleteData"></DelModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationView.vue'
import DelModal from '@/components/DelModal.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['token'],
  data () {
    return {
      products: [],
      pagination: {},
      isNew: false,
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  methods: {
    // #5 取得後台產品列表
    getData (page = 1) { // 參數預設值
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products/?page=${page}`)
        .then((res) => {
          // console.log(res.data);
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          // console.dir(err);
          alert(err.response.data.message)
        })
    },
    // modal.show()
    openModal (event, item) {
      if (event === 'new') {
        // console.log(this.tempProduct);
        this.isNew = true
        this.tempProduct = { imagesUrl: [] }
        // productModal.show();
      } else if (event === 'edit') {
        this.isNew = false
        this.tempProduct = { ...item }
        // productModal.show();
      } else if (event === 'delete') {
        this.tempProduct = { ...item }
        // console.log(this.tempProduct)
        this.$refs.deleteModal.showModal()
      }
    },
    // 刪除產品
    deleteData () {
      const deleteUrl = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(deleteUrl)
        .then((res) => {
          // console.log(res.data);
          alert(res.data.message)
          this.$refs.deleteModal.hideModal()
          this.getData()
        })
        .catch((err) => {
          // console.dir(err);
          alert(err.response.data.message)
        })
    }
  },
  components: {
    Pagination,
    DelModal
  },
  mounted () {
    this.getData()
  }
}
</script>
