<template>
  <HomeNav></HomeNav>
  <!-- 第一屏 -->
  <div style="background-image: url(https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 1; height: 100vh;">
    <div class="d-flex align-item-center h-100">
      <div class="m-auto">
        <div class="p-2" style="border: 4px solid rgb(255, 255, 255, 0.8); margin-top: 150px; ">
          <div class="text-center text-white fs-1 Serif-TC bg-opacity-20" style="writing-mode: vertical-lr;letter-spacing: 1.5rem; border: 1px solid rgb(255, 255, 255, 0.8);">
            <p class="px-2 mx-4 mt-5 mb-4">坐酌泠泠水，</p>
            <p class="px-2 mx-4 mt-5 mb-4">看煎瑟瑟塵。</p>
            <p class="px-2 mx-4 mt-5 mb-4">無由持一碗，</p>
            <p class="px-2 mx-4 mt-5 mb-4">寄與愛茶人。</p>
          </div>
        </div>
        <div class="text-center position-relative" style="bottom: 30px">
          <p class="bg-white m-auto" style="width: 1px; height: 90px;"></p>
          <span class="text-white letter-spacing Serif-TC">滾動觀看更多</span>
          <i class="bi bi-chevron-down text-white d-block"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- 第二屏-手機 -->
  <div class="bg-sec tel-use">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-5">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="" class="img-fluid">
        </div>
        <div class="tel-use">
          <div class="d-flex my-4 col-md-2">
            <div class="col-auto ps-3">
              <h3 class="letter-spacing Serif-TC mb-0">品牌理念</h3>
              <span class="text-center fs-7 Serif-TC mt-4">Brand Appeal</span>
            </div>
            <div class="col m-auto ps-3">
              <p class="bg-n500 m-auto" style="height: 1px;"></p>
            </div>
          </div>
          <div class="col-12 col-md-auto my-auto p-0">
            <div class="bg-opacity-80 px-4">
              <p class="Sans-TC pt-4 m-0 fs-5 writing-lr">別茶寄與愛茶人</p>
              <p class="Sans-TC py-4 m-0 neutral-300 writing-lr">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 第二屏 -->
  <div class="bg-sec other-use">
    <div class="container py-5">
      <div class="row flex-row-reverse justify-content-evenly my-5 position-relative">
        <div class="col-lg-6 col-md-10 my-auto p-0 pb-4 position-relative appeal-img">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="" class="img-fluid">
        </div>
        <div class="col-lg-6 col-md-10 p-0 d-flex justify-content-evenly position-relative" style="max-height: 55vh; z-index: 2;">
          <div class="mx-4 col-md-auto">
            <div class="d-flex">
              <h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr">品牌理念
              </h3>
              <span class="text-center fs-7 Serif-TC writing-lr mt-4">Brand Appeal</span>
            </div>
            <p class="bg-n500 m-auto" style="width: 1px; height: 15vh;"></p>
          </div>
          <div class="col-md-auto bg-opacity-80 writing-lr my-4">
            <p class="letter-spacing Sans-TC fs-5 mt-4">別茶寄與愛茶人</p>
            <p class="letter-spacing Sans-TC neutral-300 mb-0 mt-4">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 第三屏 -->
  <div class="container">
    <div class="row py-4 px-0">
      <div class="tel-use">
        <div class="d-flex col-md-2">
          <div class="col-auto ps-3">
            <h3 class="letter-spacing Serif-TC mb-0">別茶消息</h3>
            <span class="text-center fs-7 Serif-TC mt-4">News</span>
          </div>
          <div class="col m-auto ps-3">
            <p class="bg-n500 m-auto" style="height: 1px;"></p>
          </div>
        </div>
      </div>
      <div class="row col-md-9 d-flex justify-content-left pt-5 m-auto">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card mb-4 mx-auto" style="max-width: 22rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title Serif-TC">梨山翠峰</h5>
              <p class="fs-sm neutral-300 Sans-TC">2022年11月30日</p>
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <a href="#" class="link-primary text-decoration-none Serif-TC">瞭解更多</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card mb-4 mx-auto" style="max-width: 22rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title Serif-TC">梨山翠峰</h5>
              <p class="fs-sm neutral-300 Sans-TC">2022年11月30日</p>
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <a href="#" class="link-primary text-decoration-none Serif-TC">瞭解更多</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card mb-4 mx-auto" style="max-width: 22rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title Serif-TC">梨山翠峰</h5>
              <p class="fs-sm neutral-300 Sans-TC">2022年11月30日</p>
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <a href="#" class="link-primary text-decoration-none Serif-TC">瞭解更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-auto other-use px-0">
        <div class="d-flex" style="max-height: 40vh;">
          <div class="me-4 pe-5">
            <div class="d-flex">
              <h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr">別茶消息
              </h3>
              <span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4">News</span>
            </div>
            <p class="bg-n500 m-auto" style="width: 1px; height: 15vh;"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 mb-4">
      <button class="Serif-TC text-center btn btn-custom d-block m-auto px-4">更 多 消 息</button>
    </div>
  </div>
  <!-- 第四屏 -->
  <div class="container">
    <div class="row py-4 px-0 mb-5">
      <div class="tel-use">
        <div class="d-flex col-md-2">
          <div class="col-auto ps-3">
            <h3 class="letter-spacing Serif-TC mb-0">茶品介紹</h3>
            <span class="text-center fs-7 Serif-TC mt-4">Tea Intro</span>
          </div>
          <div class="col m-auto ps-3">
            <p class="bg-n500 m-auto" style="height: 1px;"></p>
          </div>
        </div>
      </div>
      <div class="col-md-auto other-use px-0">
        <div class="d-flex" style="max-height: 40vh;">
          <div class="ms-4 ps-5">
            <div class="d-flex">
              <h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr">茶品介紹
              </h3>
              <span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4">Tea Intro</span>
            </div>
            <p class="bg-n500 m-auto" style="width: 1px; height: 15vh;"></p>
          </div>
        </div>
      </div>
      <div class="row col-md-9 d-flex justify-content-left pt-5 m-auto">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card mb-4 mx-auto" style="max-width: 20rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <div class="text-center">
                <a href="#" class="link-primary text-decoration-none Serif-TC">前往選購</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card mb-4 mx-auto" style="max-width: 20rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <div class="text-center">
                <a href="#" class="link-primary text-decoration-none Serif-TC">前往選購</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card mb-4 mx-auto" style="max-width: 20rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <div class="text-center">
                <a href="#" class="link-primary text-decoration-none Serif-TC">前往選購</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card mb-4 mx-auto" style="max-width: 20rem;">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text Serif-TC multiline-ellipsis">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p>
              <div class="text-center">
                <a href="#" class="link-primary text-decoration-none Serif-TC">前往選購</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <FrontFooter></FrontFooter>
</template>

<script>
import HomeNav from '@/components/HomeNav.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  components: {
    HomeNav,
    FrontFooter
  }
}
</script>

<style>
.tel-use{
  display: none;
}
.other-use{
  display: block;
}
@media screen and (min-width: 992px) {
  .appeal-img{
    right: 5rem
  }
}
@media screen and (max-width: 575px) {
  .tel-use{
    display: block;
  }
  .other-use{
    display: none;
  }
}
</style>
