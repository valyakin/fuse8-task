import * as components from 'src/components'
import { BookingModal } from 'src/modals'
import { mapActions } from 'vuex'

export default {
  components: {
    ...components,
    BookingModal
  },
  methods: {
    ...mapActions({
      openModal: 'modals/open'
    }),
    openBooking () {
      this.openModal({
        factory: () => BookingModal,
        data: {}
      })
    }
  }
}
