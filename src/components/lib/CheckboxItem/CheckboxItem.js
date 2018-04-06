import uniqid from 'uniqid'

export default {
  props: {
    value: Boolean
  },
  data () {
    return {
      checked: this.value,
      cboxId: uniqid()
    }
  }
}
