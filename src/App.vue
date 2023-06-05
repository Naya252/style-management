<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    // HelloWorld
  },
  data() {
    return {
      drawer: false,
      group: true,
      items: [
        {
          title: '1',
          value: 1,
          props: {
            prependIcon: 'mdi-home',
            to: '/'
          }
        },
        {
          title: '2',
          value: 2,
          props: {
            prependIcon: 'mdi-home',
            to: '/about'
          }
        }
      ]
    }
  },
  watch: {
    group: function () {
      this.drawer = true
    }
  }
})
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon density="compact" @click="drawer = !drawer" />
      </template>

      <v-app-bar-title>Style management</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical" density="compact"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" disable-route-watcher disable-resize-watcher>
      <v-list
        nav
        :items="items"
        item-title="title"
        item-value="value"
        active-color="primary"
      ></v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
