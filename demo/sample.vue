<!--
For testing please install Vetur VS code extension by Pine Wu first
-->
<template>
  <div id="app">
    <v-navigation-drawer fixed temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">Contact</router-link>
    </v-toolbar-title>
    <div class="container app-content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>

</template>

<script>
import AppNav from './AppNav.vue';
import AppFooter from './AppFooter.vue';
export default {
  name: 'app',
  components: { AppNav, AppFooter },
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
        { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
        { icon: 'person', title: 'Profile', link: '/profile' },
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
    };
  }
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.app-content {
  padding: 60px 15px 0;
}
</style>

