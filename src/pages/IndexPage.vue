<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <chat-history
        :chat-messages="messages">
      </chat-history>
    </div>
    <div class="chatInputArea">
      <q-btn class="chatinput" color="primary" label="Send" @click="sendExampleMessage"/>
      <div class="inputDiv">
        <q-input class="chatinput" outlined v-model="chatMessage" label="Schreib eine Nachricht"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatHistory from 'components/ChatHistory.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { ChatHistory },
  data(){
    return {
      chatMessage: '',
      messages: this.$klarachatData
    }
  },
  methods: {
    async sendExampleMessage () {
      let msg = this.chatMessage;
      this.chatMessage = '';
      await this.$chatcontroller.sendMessageToChatbot(msg);
    }
  }
});
</script>

<style>
  .chatInputArea button, .chatInputArea .inputDiv, .chatInputArea input {
  height: 5vh;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.chatInputArea button {
  float: right;
  margin-left: 1vh;
}
.chatInputArea .inputDiv {
  overflow: visible;
}
.chatInputArea {
  margin-top: 1vh;
  width: 100%;
}
</style>
