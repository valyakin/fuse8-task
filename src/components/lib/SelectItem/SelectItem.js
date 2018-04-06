import SelectDropdown from '../SelectDropdown/SelectDropdown.vue'

export default {
  components: {
    SelectDropdown
  },
  props: {
    options: Array,
    value: [String, Object],
    label: String,
    error: [String, Boolean],
    valid: Boolean
  },
  data () {
    return {
      current: this.value,
      shown: false
    }
  },
  computed: {
    currentSelection () {
      return this.value ? this.current.label : null
    }
  },
  methods: {
    select (selected) {
      this.current = this.options.find(o => o.key === selected.key)
      this.$emit('input', this.current.label)
    }
  }
}
