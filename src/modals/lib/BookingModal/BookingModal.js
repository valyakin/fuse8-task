import * as components from 'src/components'
import { required, minLength, alpha, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  components,
  data: () => ({
    success: false,
    education: null,
    campus: null,
    date: null,
    firstName: null,
    lastName: null,
    email: null,
    subscribeCheckbox: true,
    labelCampus: 'Campus',
    labelEducation: 'I am an',
    optionsCampus: [
      {
        key: 'colchester',
        label: 'Colchester Campus'
      },
      {
        key: 'sacramento',
        label: 'Sacramento Campus'
      },
      {
        key: 'ozark',
        label: 'Ozark campus'
      }
    ],
    optionsEducation: [
      {
        key: 'under',
        label: 'Undergraduate'
      },
      {
        key: 'bachelor',
        label: 'Bachelor'
      },
      {
        key: 'master',
        label: 'Master'
      },
      {
        key: 'doctor',
        label: 'Doctor'
      }
    ]
  }),
  methods: {
    ...mapActions({
      closeModal: 'modals/close'
    }),
    submit ($v) {
      $v.$touch()
      this.success = false
      console.log(
        this.education,
        this.campus,
        this.date,
        this.firstName,
        this.lastName,
        this.email,
        this.subscribeCheckbox
      )
      if( !$v.$error ) {
        $v.$reset()
        this.education = null
        this.campus = null
        this.date = null
        this.firstName = null
        this.lastName = null
        this.email = null
        this.subscribeCheckbox = true
        this.success = true
      }
    },
    errorName (field) {
      return field.$dirty && [
        !field.required ? 'Field is required' : false,
        !field.alpha ? 'Must only contain letters' : false,
        !field.minLength ? 'Must be more than 3 chars long' : false,
        field.$error ? 'Invalid format' : false
      ].find( e => e )
    },
    errorRequired (field) {
      return field.$dirty && [
        !field.required ? 'Field is required' : false,
        field.$error ? 'Invalid format' : false
      ].find( e => e )
    },
    errorEmail (field) {
      return field.$dirty && [
        !field.required ? 'Field is required' : false,
        !field.email ? 'Invalid e-mail format' : false,
        field.$error ? 'Invalid format' : false
      ].find( e => e )
    },
    valid (field) {
      return field.$dirty && !field.$invalid
    }
  },
  validations: {
    date: {
      required
    },
    campus: {
      required
    },
    education: {
      required
    },
    firstName: {
      alpha,
      required,
      minLength: minLength(4)
    },
    lastName: {
      alpha,
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  }
}
