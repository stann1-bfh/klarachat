<template>
    <q-scroll-area 
        :visible=true
        style="
            height: 85vh; 
            max-width: 100%;
            padding-right: 20px;"
        class="chatwindow"
        >
        <q-infinite-scroll @load="onLoad" :offset="250" reverse>
            <div v-for="(message, index) in initialMessages" :key="index">
                <q-chat-message
                    :name="message.name"
                    :text="message.text"
                    :avatar= "require('../assets/chat/' + message.avatar)"
                    :sent="message.sent"
                    :stamp="message.stamp"
                    :bg-color="message.bgcolor"
                ></q-chat-message>
            </div>

            <template v-slot:loading>
            <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
            </div>
            </template>
        </q-infinite-scroll>
    </q-scroll-area>
</template>
  
<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { KlaraChatMessage } from './models';

    export default defineComponent({
        name: 'ChatHistory',
        props: {
            chatMessages: {
                type: Array as PropType<KlaraChatMessage[]>,
                required: true
            }
        },
        //Give Props as parameter to access it
        setup(props){
            let initialMessages = [] as Array<KlaraChatMessage>
            props.chatMessages.forEach(function (value, i){
                if (i < 10){
                    initialMessages.length === 0 ? initialMessages.push(value) : initialMessages.unshift(value)
                }
            }); 

            return {
                initialMessages,
                onLoad (index: any, done: any){
                    setTimeout(() => {
                        console.log('in Onload')
                        console.log('current index: ' + index)
                        let found = false
                        props.chatMessages.forEach(function (value, i){
                            //FIXME Chat Loading only works when JSON is sorted
                            if (!initialMessages.includes(value)){
                                initialMessages.unshift(value)
                                found = true
                            }
                        })
                        if (found){
                            done()
                        }
                    }, 250);
                }
            }
        }
    });
</script>
  