<script lang="ts">
import { useMeta } from 'vue-meta'
import { defineComponent, computed, ref } from 'vue'

import { getTitle, setTitle } from './repositories/api'
import { createChanellTitle, useChannelTitle } from './services/styleManagementService'

export default defineComponent({
  setup(){

    let title = ref("Title")
    let savedTitle = getTitle();

    if(savedTitle) {
      title.value = savedTitle
    }

    useMeta(
    computed(() => ({ title: title.value ?? 'Default' })))

    createChanellTitle()

    const items =  [
        {
          title: 'Metadata',
          value: 1,
          props: {
            prependIcon: 'mdi-home',
            to: '/meta'
          }
        },
        {
          title: 'Theme',
          value: 2,
          props: {
            prependIcon: 'mdi-home',
            to: '/theme'
          }
        }
      ];

      function changeTitle(val: string) {
        title.value = val;
        setTitle(val)
        useChannelTitle(val)
    }

      return {
        title,
        items,
        changeTitle,
      } 
  },
  head: {},
  data() {
    return {
      drawer: true,
      group: true,
    }
  },
  methods: {
  },
  mounted() {
  },
  provide() {
    return {
      title: this.title,
      changeTitle: this.changeTitle
    }
  },
  watch: {
    group: function () {
      this.drawer = true
    },
  }
})
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content}` : `SITE_NAME` }}</template>
  </metainfo>

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
      <v-list nav :items="items" item-title="title" item-value="value" color="primary"></v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
