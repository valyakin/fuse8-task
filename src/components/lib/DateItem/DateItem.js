import uniqid from 'uniqid'
import DatePicker from 'vuejs-datepicker'

export default {
  components: { DatePicker },
  props: {
    label: String,
    required: Boolean,
    error: [String, Boolean],
    valid: Boolean,
    value: Date
  },
  data () {
    return {
      date: null,
      shown: false
    }
  },
  computed: {
    labelStr () { return `${this.label || ''}${this.required ? '*' : ''}` },
    dateStr () {
      return this.value ? new Date(this.value).toLocaleDateString("en-US",{
        weekday: 'short',
        day: 'numeric',
        month: 'long'
      }) : null
    }
  },
  methods: {
    dateChanged () {
      this.shown = false
      this.$emit('input', this.date)
    }
  }
}
