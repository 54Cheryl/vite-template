<template>
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="" class="row">
            <div class="col-4">
              <div class="col">
                <label class="form-label mt-2" for="">主要圖片</label>
                <input type="text" class="form-control mb-2" id="" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                <img :src="tempProduct.imageUrl" alt="" class="img-fluid">
              </div>
              <p class="fs-4 mt-2">多圖新增</p>
              <template v-if="Array.isArray(tempProduct.imagesUrl)">
                <div class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                  <div class="mb-3">
                    <label for="" class="form-label">圖片網址</label>
                    <input v-model="tempProduct.imagesUrl[key]" type="text" class="form-control"
                      placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="image">
                </div>
                <div v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="() => tempProduct.imagesUrl.push('')">
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button class="btn btn-outline-danger btn-sm d-block w-100" @click="() => tempProduct.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </template>
              <div v-else>
                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="() => $emit('create-images')">
                  新增圖片
                </button>
              </div>
              <div class="col mt-5">
                <label for="customFile" class="fs-4 form-label"
                  >上傳圖片檔案
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="imgUploading"
                  ></i>
                </label>
                <input
                type="file"
                name="file-to-upload"
                id="customFile"
                class="form-control mb-2"
                ref="fileInput"
                @change="uploadFile"
                />
                <label for="fileLink" class="form-label mt-2">檔案生成網址</label>
                <input type="text" class="form-control mb-2" id="fileLink" placeholder="請複製用於上方圖片連結" v-model="tempProduct.tempImage">
              </div>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-6">
                  <label class="form-label mt-2" for="">品名</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入品名" v-model="tempProduct.title">
                </div>
                <div class="col-6">
                  <label class="form-label mt-2" for="">類別</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入類別" v-model="tempProduct.category">
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="form-label mt-2" for="">產地</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入產地" v-model="tempProduct.origin_place">
                </div>
                <div class="col-6">
                  <label class="form-label mt-2" for="">品種</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入品種" v-model="tempProduct.variety">
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="form-label mt-2" for="">香氣</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入香氣" v-model="tempProduct.aroma">
                </div>
                <div class="col-6">
                  <label class="form-label mt-2" for="">滋味</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入滋味" v-model="tempProduct.taste">
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="form-label mt-2" for="">茶乾</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入茶乾" v-model="tempProduct.tea_dried">
                </div>
                <div class="col-6">
                  <label class="form-label mt-2" for="">單位</label>
                  <input type="text" class="form-control" id="" placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="form-label mt-2" for="">原價</label>
                  <input type="number" min="0" class="form-control" id="" placeholder="請輸入原價" v-model.number="tempProduct.origin_price">
                </div>
                <div class="col-6">
                  <label class="form-label mt-2" for="">售價</label>
                  <input type="number" min="0" class="form-control" id="" placeholder="請輸入售價" v-model.number="tempProduct.price">
                </div>
              </div>
              <label class="form-label mt-2" for="">產品描述</label>
              <textarea class="form-control" id="" cols="30" rows="2" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
              <label class="form-label mt-2" for="">說明內容</label>
              <textarea class="form-control" id="" cols="30" rows="2" placeholder="請輸入說明內容" v-model="tempProduct.content"></textarea>
              <div class="col mt-2">
                <input type="checkbox" class="form-check-input" id="" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
                <label class="form-label ms-2" for="">是否啟用</label>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="() => $emit('cancel-product')">取消</button>
          <button type="button" class="btn btn-primary" @click="() => $emit('update-product')">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
import { Toast, Swal } from '@/methods/swalToast'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  props: {
    product: {},
    isNew: {}
  },
  data () {
    return {
      tempProduct: {},
      modal: '',
      imgUploading: false
    }
  },
  mixins: [modalMixin],
  emits: ['update-product', 'cancel-product', 'create-images'],
  watch: {
    product () {
      this.tempProduct = this.product
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = ''
      }
    }
  },
  methods: {
    uploadFile () {
      this.imgUploading = true
      const file = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.tempImage = res.data.imageUrl
            this.$refs.fileInput.value = ''
            this.imgUploading = false
            Toast.fire({
              icon: 'success',
              title: '上傳成功',
              text: res.data.message
            })
          } else {
            this.$refs.fileInput.value = ''
            this.imgUploading = false
            Toast.fire({
              icon: 'error',
              title: '上傳失敗',
              text: res.data.message
            })
          }
        })
        .catch((err) => {
          this.imgUploading = false
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    }
  }
}
</script>
