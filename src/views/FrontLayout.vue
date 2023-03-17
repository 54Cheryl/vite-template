<template>
  <RouterView :key="$route.path"></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>
