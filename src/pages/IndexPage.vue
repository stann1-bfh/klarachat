<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <!--FIXME Somehow works but still error?-->
      <chat-history :key="snapshot"
        :chat-messages="allMessages">
      </chat-history>
    </div>
    <div class="chatInputArea">
      <q-btn class="chatinput" color="primary" label="Send" @click="sendMessage" tabindex="2"/>
      <q-input ref="userChatInput" class="chatinput" outlined v-model="chatMessage" label="Schreib eine Nachricht" @keyup.enter="sendMessage" tabindex="1"/>
    </div>
  </div>
</template>

<script lang="ts"> 
import { defineComponent, ref } from 'vue';
import ChatHistory from 'components/ChatHistory.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { ChatHistory },
  data(){
    return {
      chatMessage: '',
      snapshot: 0,
      allMessages: ref(this.$chatcontroller.chatdata)
    }
  },
  methods: {
    /**
     * Sends the Message from the Inputbox to the Chatbot.
     */
    async sendMessage () {
      let userMessage = this.chatMessage;
      this.chatMessage = '';
      //Handle empty Chatmessages
      if (userMessage === ''){
        return;
      }
      //Send User Message -> Catch the snapshot to trigger the re-render
      this.snapshot = this.$chatcontroller.newUserMessage(userMessage);
      //Send ChatBot Message -> Catch the snapshot to trigger the re-render
      this.snapshot = await this.$chatcontroller.sendMessageToChatbot(userMessage);
      //Reset rendering-key
      this.snapshot = 0;
    }
  }
});
</script>
 
<style>
  .chatInputArea button, .chatInputArea, .chatInputArea input {
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.chatInputArea button {
  float: right;
  margin-left: 1vh;
}
.chatInputArea {
  overflow: visible;
}
.chatInputArea {
  margin-top: 1vh;
  width: 100%;
}
</style>
