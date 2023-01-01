/**
 * ChatController
 * Controls the Chat Interaction
 */

//TODO Insert new Chat to ChatHistory

import { KlaraChatMessage } from 'src/model/ChatMessageModel';
import ChatModel from 'src/model/ChatModel';
import APIController from './APIController';

export default class ChatController {
    private _active_chat?: ChatModel;
    private _apicontroller: APIController;
    private _chatdata: KlaraChatMessage[];

    constructor(apicontroller: APIController, chatdata: KlaraChatMessage[], active_chat?: ChatModel){
        this._active_chat = active_chat;
        this._chatdata = chatdata;
        this._apicontroller = apicontroller;
    }

     
    public async sendMessageToChatbot(message: string): Promise<any>{
        const chatbotanswer = await this._apicontroller.sendGetRequestToChatbot(message);
        console.log(chatbotanswer)
        //TODO Implement Chatbuilding Logic from Chatbot
        return await chatbotanswer;
    }

    /**
     * Getter Function of the Property active_chat
     */
    get active_chat(): ChatModel | undefined {
        return this._active_chat;
    }
    /**
     * Setter Function of the Property active_chat
     * @param value Value to be set
     */
    set active_chat(value) {
        this._active_chat = value
    }
}