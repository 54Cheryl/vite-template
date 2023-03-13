<template>
  <NavBar></NavBar>
  <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 200px;">
    <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 0.8;"></div>
  </div>
  <!-- 第一屏-手機 -->
  <div class="bg-sec tel-use">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-5">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="" class="img-fluid">
        </div>
        <div class="tel-use mt-2">
          <div class="d-flex my-4 col-md-2">
            <div class="col-auto ps-3 position-relative">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="" class="position-absolute" style="left: -0.1rem; top: -1rem;">
              <h3 class="letter-spacing Serif-TC mb-0 neutral-900">品牌理念</h3>
              <span class="text-center fs-7 Serif-TC mt-4 neutral-900">Brand Appeal</span>
            </div>
            <div class="col m-auto ps-3">
              <p class="bg-n500 m-auto" style="height: 1px;"></p>
            </div>
          </div>
          <div class="col-12 col-md-auto my-auto p-0">
            <div class="bg-opacity-80 px-4">
              <p class="Sans-TC pt-4 m-0 neutral-700 fs-5 writing-lr">別茶寄與愛茶人</p>
              <p class="Sans-TC py-4 m-0 neutral-300 writing-lr">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 第一屏 -->
  <div class="bg-sec other-use">
    <div class="container py-5">
      <div class="row flex-row-reverse justify-content-evenly my-5 position-relative">
        <div class="col-lg-6 col-md-10 my-auto p-0 position-relative appeal-img">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="" class="img-fluid">
        </div>
        <div class="col-lg-6 col-md-10 p-0 d-flex justify-content-evenly position-relative appeal-top" style="max-height: 450px; height: 55vh; z-index: 2;">
          <div class="mx-4 col-md-auto">
            <div class="d-flex position-relative">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="" class="position-absolute" style="right: 0.5rem; top: -0.2rem;">
              <h3 class="letter-spacing Serif-TC mt-3 mx-0 writing-lr neutral-900">品牌理念
              </h3>
              <span class="text-center fs-7 Serif-TC writing-lr mt-3 neutral-900">Brand Appeal</span>
            </div>
            <p class="bg-n500 m-auto" style="width: 1px; height: 15vh;"></p>
          </div>
          <div class="col-md-auto bg-opacity-80 writing-lr my-4">
            <p class="letter-spacing Sans-TC neutral-700 fs-5 mt-4">別茶寄與愛茶人</p>
            <p class="letter-spacing Sans-TC neutral-300 mb-0 mt-4">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-5 bg-all">
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

<style>
</style>
