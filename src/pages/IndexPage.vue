<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 100%">
      <!--FIXME Somehow works but still error?-->
      <chat-history
        :chat-messages="allMessages">
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
import { defineComponent, ref } from 'vue';
import ChatHistory from 'components/ChatHistory.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { ChatHistory },
  data(){
    return {
      chatMessage: '',
      allMessages: ref(this.$chatcontroller.chatdata)
    }
  },
  methods: {
    async sendExampleMessage () {
      let userMessage = this.chatMessage;
      this.chatMessage = '';
      //Handle empty Chatmessages
      if (userMessage === ''){
        return;
      }
      
      
      //Refreshing the component
      //FIXME Unshift does not Trigger ComponentUpdate?
      //Send User Message
      this.$chatcontroller.newUserMessage(userMessage);
      //Send ChatBot Message
      const snapshot = await this.$chatcontroller.sendMessageToChatbot(userMessage);
      if (snapshot){
        console.log('Force Updating ChatHistory Component')
        this.$parent?.$forceUpdate();
      }
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
