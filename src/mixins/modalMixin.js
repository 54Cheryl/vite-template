import Modal from 'bootstrap/js/dist/modal'

export default {
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal, { backdrop: 'static', keyboard: false })
    this.$refs.modal.addEventListener('hide.bs.modal', () => {
      const activeElement = document.activeElement
      if (activeElement instanceof HTMLElement && this.$refs.modal.contains(activeElement)) {
        activeElement.blur()
      }
    })
  }
}
