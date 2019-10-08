<template>
  <v-container>
    <v-layout align-center row wrap>
      <v-flex>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            v-on:keyup.enter="validate"
            type='email'
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
            :type="passwordShow ? 'text' : 'password'"
                @click:append="passwordShow = !passwordShow"
                v-on:keyup.enter="validate"
            ></v-text-field>

            <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            :rules="passwordRules"
            required
            :append-icon="confirmPasswordShow ? 'visibility' : 'visibility_off'"
            :type="confirmPasswordShow ? 'text' : 'password'"
                @click:append="confirmPasswordShow = !confirmPasswordShow"
                v-on:keyup.enter="validate"
            ></v-text-field>

            <v-btn
            text
            :disabled="!valid"
            color="success"
            @click="validate"
            >
            Register
            </v-btn>
            
            <v-btn
            text
            color="error"
            @click="reset"
            >
            Reset Form
            </v-btn>
            <v-btn
            :disabled="!working"
            >
            Status
            </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    passwordShow: false,
    confirmPasswordShow: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    confirmPassword: '',
    passwordRules: [
      v => !!v || 'Password and Confirm Password are required',
      v => (v.length > 5) || 'Password must be at least 6 characters long'
    ],
    working: false
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true,
        this.registerWithFirebase()
      }
    },
    registerWithFirebase () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUpAction', user)
    //   this.checkStatus();

    },
    reset () {
      this.$refs.form.reset()
    },
    checkStatus () {
        if (this.$store.state.status == 'loading') {
            this.$data.working = true
        }
        else {
            this.$data.working = false
        }
    }
  }
}
</script>