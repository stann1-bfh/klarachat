<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="info" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Klarachat
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="desktop" bordered>
      <div class="aboutKlarachat">
        <div class="chatbotAbout">
          <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
              <div class="aboutAvatar">
                <q-avatar square size="100px">
                  <img src="../assets/chat/klarabotKlara.png">
                </q-avatar>
                <p class="aboutAvatarName">Klara</p>
              </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <p>
                Klara ist eine virtuelle Chat-Assistentin, auch bekannt als Chatbot. 
                Sie basiert auf der Technologie <a href="https://chatterbot.readthedocs.io/en/stable/">ChatterBot</a>.
                Sie soll Gesundheitsfachpersonen bei der Patientenkommunikation helfen, indem sie wiederkehrende Anfragen (halb-)automatisch abwickelt.
              </p>
              <div class="footerAbout">
                <p>Copyright (c) 2022, stann1-bfh</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
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
  }
}
</script>

<style>
.footerAbout {
    display: flex;
    justify-content: center;
    font-size: 10px;
}

.chatbotAbout {
    width: 100%;
    margin: 0 auto;
}

.aboutAvatar{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5;
}

.aboutKlarachat {
    width: 80%;
    height: 80%;
    margin: 5% auto;
}

.aboutAvatarName {
    margin: 0;
    margin-top: 15px;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    font-style: italic;
}
</style>