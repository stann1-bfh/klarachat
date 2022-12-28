<template>
  <div class="q-pa-md row justify-center">
    
    <div style="width: 100%; max-width: 100%">
      <chat-history
        :chat-messages="messages">
      </chat-history>
    </div>
  </div>

  <!--<q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>-->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo, Meta, KlaraChatMessage } from 'components/models';
//import ExampleComponent from 'components/ExampleComponent.vue';
import ChatHistory from 'components/ChatHistory.vue'
import chatmessages from 'app/src/data/chatmessages.json'

function importChatHistory(){
  let convo = new Array<KlaraChatMessage>()

  chatmessages.forEach(message => {
    convo.length === 0 ? convo.push(message) : convo.unshift(message);
  });

  return convo
}

export default defineComponent({
  name: 'IndexPage',
  components: { /*ExampleComponent,*/ ChatHistory },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });

    let messages = importChatHistory();

    return { 
      todos, 
      meta,
      messages
    };
  }
});
</script>
