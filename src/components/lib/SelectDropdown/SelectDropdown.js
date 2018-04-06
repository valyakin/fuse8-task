export default {
  props: {
    options: Array
  },
  methods: {
    select (e) {
      this.$emit('select', this.options.find(o => o.key === e.target.value))
    }
  }
}
