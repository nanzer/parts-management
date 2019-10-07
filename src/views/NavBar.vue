<template>
    <!-- display the navigation bar -->
    <v-toolbar>
      <v-toolbar-items>
        <v-btn
          text
            tag='span'
            style='cursor: pointer'
            >
          Parts Management
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
<!-- navigation bar links -->
      <v-toolbar-items class='hidden-xs-only' v-if="!userLoggedIn">
        <v-btn text v-for="item in items" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>{{item.title}}
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar-items>
      <!-- sign out button -->
      <v-toolbar-items class='hidden-xs-only' v-else>
        <v-btn
          text @click='logoutFromFirebase'
          >
          <v-icon left>delete_sweep</v-icon>Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  computed: {
    items() {
      let menuItems =  [
        {
          title: 'Register',
          icon: 'face',
          link: '/register'
        },
        {
          title: 'Login',
          icon: 'no_encryption',
          link: '/login'
        }
      ]
    return menuItems
    },
    userLoggedIn(){
      return this.$store.getters.user
    }
  },
  methods: {
    logoutFromFirebase(){
      this.$store.dispatch('signOutAction')
    }
  }
}
</script>