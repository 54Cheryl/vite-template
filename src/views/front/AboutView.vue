<template>
  <NavBar></NavBar>
  <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
    <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 0.8;"></div>
  </div>
  <div class="pt-5 bg-all">
    <div class="container">
      <div class="row">
        <div class="col writing-lr py-3" style="max-height: 60vh;">
          <h3 class="letter-spacing Serif-TC me-0">品牌理念</h3>
          <p class="py-5 fs-5 letter-spacing Sans-TC">別茶寄與愛茶人</p>
          <p class="py-5 letter-spacing Sans-TC" style="line-height: 2rem;">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p>
        </div>
        <div class="col-7 my-3 py-5" style="box-sizing: border-box;">
          <img class="card-img-top object-cover" src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="">
        </div>
      </div>
    </div>
    <div class="py-5 bg-sec">
      <div class="container">
        <div class="row">
          <div class="col-7 my-3 py-5" style="box-sizing: border-box;">
            <div class="row position-relative">
              <div class="col-7 pe-0">
                <img class="card-img-top object-cover" src="https://images.unsplash.com/photo-1531877038798-51499a9eedf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80" alt="">
              </div>
              <div class="col-5 ps-0 position-absolute" style="bottom: -40px; right: 20px;">
                <img class="card-img-top object-cover" src="https://images.unsplash.com/photo-1519095615130-d36e0fe3bf63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80" alt="" style="max-height: 270px;">
              </div>
            </div>
          </div>
          <div class="col-5 writing-rl py-3" style="max-height: 50vh;">
            <h3 class="letter-spacing Serif-TC ms-0">別茶品茶師</h3>
            <p class="py-5 fs-5 letter-spacing Sans-TC">首席品茶師 GRACE</p>
            <p class="mb-5 pt-5 letter-spacing Sans-TC" style="line-height: 2rem;">擁有超過二十年的茶席經驗，並且曾受邀前往日本、德國等地推廣茶文化，以專業的品評技巧，創造出獨具特色的品茶體驗。透過「茶乾香、茶湯味、杯底香」的細膩層次感受，深刻地展現出台灣茶的美妙向度，其中的芬芳則源自土壤、雨水以及製茶師的手藝。憑藉對茶葉的熱情與堅持，她將引領您探索不同種類的茶葉風味，讓您品味茶葉的多種層次。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter></FrontFooter>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  components: {
    NavBar,
    FrontFooter
  }
}
</script>

<style scoped>
</style>
