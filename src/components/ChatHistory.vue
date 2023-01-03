<template>
    <q-scroll-area :visible=true class="chatwindow">
        <div ref="scrollTarget" class="q-pa-md">
            <q-infinite-scroll @load="(index, done) => onLoad(index, done)" :offset="200" reverse>
                <template v-if="displayedMessages.length > 0">
                    <div v-for="(message, index) in displayedMessages" :key="index">
                        <q-chat-message
                            :name="message.name"
                            :text="message.text"
                            :avatar= "require('../assets/chat/' + message.avatar)"
                            :sent="message.sent"
                            :stamp="message.stamp.stamp"
                            :bg-color="message.bgcolor"
                        ></q-chat-message>
                    </div>
                </template>
                <template v-slot:loading>
                    <div class="row justify-center q-my-md">
                        <q-spinner-dots color="primary" size="40px" />
                    </div>
                </template>
            </q-infinite-scroll>
        </div>
    </q-scroll-area>
</template>
  
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import ChatMessageModel from 'src/model/ChatMessageModel';
//Number of Messages loaded per loading interval
const LOADING_INTERVAL = 5

function loadInitialMessages(allMessages: ChatMessageModel[]): ChatMessageModel[]{
    let displayedMsgs = [] as Array<ChatMessageModel>;
    allMessages.forEach(function (value, i){
        if (i < LOADING_INTERVAL*2){
            displayedMsgs.length === 0 ? displayedMsgs.push(value) : displayedMsgs.unshift(value)
        }
    });
    return displayedMsgs;
}

export default defineComponent({
    name: 'ChatHistory',
    props: {
        chatMessages: {
            type: Array as PropType<ChatMessageModel[]>,
            required: true
        }
    },
    setup(props){
        const scrollTarget = ref(null)
        let displayedMessages = ref(loadInitialMessages(props.chatMessages))
        return {
            displayedMessages,
            scrollTarget,
            onLoad (index: any, done: any){
                setTimeout(() => {
                    const maxLength = displayedMessages.value.length + LOADING_INTERVAL;
                    const tempMessages = [] as Array<ChatMessageModel>;
                    props.chatMessages.forEach(element => {
                        if (tempMessages.length === 0){
                            tempMessages.push(element);
                            return;
                        } 
                            if (!tempMessages.includes(element) && tempMessages.length < maxLength){
                                tempMessages.unshift(element)
                            }
                        
                    })
                    displayedMessages.value = tempMessages.slice();
                    done()
                }, 1500);
            }
        }
    }
});
</script>

<style>
.chatwindow {
    height: 85vh; 
    max-width: 100%;
    padding-right: 20px;
}
</style>
  