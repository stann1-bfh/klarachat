<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Klarachat
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" bordered>
      <p>Hello there</p>
      <q-btn color="primary" label="Send to Localhost" @click="sendExampleMessage"/>
    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    sendExampleMessage () {
      console.log('In Example Message')
      let answer = ''
      this.$axiosInstance.get('http://127.0.0.1:5000/klarabotapi?message=Wie gehts?')
        .then((response) => {
          answer = response.data
          console.log(answer.message)
        })
        .catch(() => {
          console.log('Error')
        })
    }
  }
}
</script>