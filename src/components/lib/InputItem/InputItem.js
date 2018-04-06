import uniqid from 'uniqid'

export default {
  props: {
    label: String,
    required: Boolean,
    value: String,
    error: [String, Boolean],
    valid: Boolean
  },
  data: () => ({
    inputId: uniqid()
  }),
  computed: {
    labelStr () { return `${this.label || ''}${this.required ? '*' : ''}` }
  }
}
