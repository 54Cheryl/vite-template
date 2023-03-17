<template>
  <button type="button" class="btn position-fixed p-0 my-4 mx-5 end-0 bottom-0 border-0" style="z-index: 3;" @click.prevent="backTop"><i class="bi bi-arrow-up-circle text-primary fs-1"></i></button>
  <RouterView :key="$route.path"></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  },
  methods: {
    backTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
