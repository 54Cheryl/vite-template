<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination mb-3 justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="() => updatePage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        :class="{ disabled: page === pages.current_page }"
        v-for="page in pages.total_pages"
        :key="page + 'page'"
      >
        <a class="page-link" href="#" @click.prevent="() => $emit('change-page', page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="() => updatePage(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('change-page', page)
    }
  }
}
</script>
