<template>
  <nav class="navbar navbar-expand-lg fixed-top py-2"
  :class="{
    'bg-opacity-20': isScrolled,
    'bg-white': !isScrolled,
    'navbar-light': !isScrolled,
    'navbar-dark': isScrolled
    }">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678219730669.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jr57jwJwQnJxBbVJ6Mjlt4LMI02jKzEl8QFx%2FO0af1bDHh4ohdzqQt%2Fksjh9Q3FRPpaoLlHIMbGxzDA0zictZZvbzjPLl4OASeE3CwdkWnl%2Fqw2sjFBrQJDDeNSIAdvtWjLuaJ548Da0Ro4R9p9dqUHf9EMed7PhYaH6xIyznShARf4bBAH8IOm55edM%2FFlA9BWzmLYph7AAlYQGz0rUuW%2FtdsnV2qjaQKOieegfN8%2FWz%2FuswvapCNg2usNTkvdYLLEUTtkX%2F8OfI1AL5GJ9nF1kFctRa%2By2aU7pUal%2BwjW7rpK7PNk6HHtsa6UVOsw6xmxy9uNgUbO4KWIaBrsqkg%3D%3D" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto pt-3 pe-5 Serif-TC">
          <li class="nav-item px-3">
            <router-link to="/products" class="nav-link writing-lr">
              <span class="d-block letter-spacing">產品介紹</span>
              <span class="d-block">Product</span>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/news" class="nav-link writing-lr">
              <span class="d-block letter-spacing">別茶消息</span>
              <span class="d-block">News</span>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/about" class="nav-link writing-lr">
              <span class="d-block letter-spacing">關於別茶</span>
              <span class="d-block">About</span>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link to="/cart" class="nav-link d-flex">
              <span class="position-relative">
                <span class="position-absolute topNegative start-50 translate-middle badge rounded-pill bg-danger fs-sm">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
                <span class="d-block writing-lr letter-spacing">
                  購物車
                </span>
              </span>
              <span class="d-block writing-lr">Cart</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isScrolled: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const ninety = (window.innerHeight) * 0.88
      if (window.pageYOffset > ninety) {
        this.isScrolled = false
      } else {
        this.isScrolled = true
      }
    }
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
</style>
