<template>
  <NavBar />
  <div class="bg-sec" style="padding-top: 90px; padding-bottom: 6vh;">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 180px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80); background-position: center center; opacity: 1;"></div>
    </div>
    <!-- 手機 -->
    <div class="bg-sec tel-use">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-offset="0">
            <img :src="fullNews.news_img" :alt="fullNews.news_title" class="object-cover" style="height: 35vh; width: 100%;">
          </div>
          <div class="tel-use mt-2">
            <div class="d-flex my-4 col-md-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0">
              <div class="col-auto ps-3 position-relative">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="title-icon-img" class="position-absolute" style="left: -0.1rem; top: -1rem;">
                <h3 class="letter-spacing Serif-TC mb-0 neutral-900">{{fullNews.news_title}}</h3>
                <span class="text-center fs-7 Serif-TC mt-4 neutral-900">{{fullNews.en_title}}</span>
              </div>
              <div class="col m-auto ps-3">
                <p class="bg-n500 m-auto" style="height: 1px;"></p>
              </div>
            </div>
            <div class="col-12 col-md-auto my-auto p-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0">
              <div class="bg-opacity-80 px-4">
                <p class="Sans-TC pt-4 m-0 neutral-700 fs-5 writing-lr">{{fullNews.content_title}}</p>
                <p class="Sans-TC py-2 m-0 fs-sm neutral-300 writing-lr">{{ fullNews.news_date }}</p>
                <p class="Sans-TC pb-4 m-0 neutral-500 writing-lr">{{ fullNews.news_content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 其他 -->
    <div class="bg-sec other-use">
      <div class="container pt-5">
        <div class="row flex-row-reverse justify-content-evenly my-5 position-relative">
          <div class="col-lg-6 col-md-10 my-auto p-0 position-relative appeal-img" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
            <img :src="fullNews.news_img" :alt="fullNews.news_title" class="object-cover" style="height: 55vh; width: 45vw;">
          </div>
          <div class="col-lg-6 col-md-10 p-0 d-flex justify-content-evenly position-relative appeal-top" style="max-height: 450px; height: 55vh; z-index: 2;">
            <div class="mx-4 col-md-auto">
              <div class="d-flex position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="title-icon-img" class="position-absolute" style="right: 0.5rem; top: -0.2rem;">
                <h3 class="letter-spacing Serif-TC mt-3 mx-0 writing-lr neutral-900">{{ fullNews.news_title }}
                </h3>
                <span class="text-center fs-7 Serif-TC writing-lr mt-3 neutral-900" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0">{{fullNews.en_title}}</span>
              </div>
              <p class="bg-n500 m-auto" style="width: 1px; height: 15vh;" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0" data-aos-delay="100"></p>
            </div>
            <div class="col-md-auto bg-opacity-80 writing-lr my-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-offset="0">
              <p class="letter-spacing Sans-TC neutral-700 fs-5 mt-4 ms-3 me-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="300" data-aos-offset="0">{{fullNews.content_title}}</p>
              <p class="lh-lg Sans-TC fs-sm neutral-300 mb-4 mt-4 ms-2 me-0" style="letter-spacing: 0.3rem;" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0">{{ fullNews.news_date }}</p>
              <p class="lh-lg Sans-TC neutral-500 mb-4 mt-4 ms-2 me-3" style="letter-spacing: 0.3rem;" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0">{{fullNews.news_content}}</p>
            </div>
          </div>
        </div>
        <div class="pt-5 pb-4 text-center">
          <a href="/vite-template/#/news" class="Serif-TC letter-spacing text-center btn btn-outline-custom m-auto" style="padding-left: 2rem;">消息總覽</a>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>

<script>
import { mapState } from 'pinia'
import newsStore from '@/stores/newsStore'
import NavBar from '@/components/NavBar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  data () {
    return {
      fullNews: {}
    }
  },
  components: {
    NavBar,
    FrontFooter
  },
  computed: {
    ...mapState(newsStore, ['news'])
  },
  methods: {
    getNew () {
      const id = parseInt(this.$route.params.news_id)
      this.fullNews = this.news.find(item => item.news_id === id)
    }
  },
  mounted () {
    this.getNew()
  }
}
</script>
