/**
 * ChatController
 * Controls the Chat Interaction
 */
import ChatMessageModel from 'src/model/ChatMessageModel';
import ChatModel from 'src/model/ChatModel';
import TimeStampModel from 'src/model/TimeStampModel';
import APIController from './APIController';

export default class ChatController {
    private _active_chat: ChatModel;
    private _apicontroller: APIController;
    private _chatdata: ChatMessageModel[];

    constructor(apicontroller: APIController, chatdata: ChatMessageModel[], active_chat: ChatModel){
        this._active_chat = active_chat;
        this._chatdata = this.loadChatData(chatdata);
        this._apicontroller = apicontroller;
    }

    /**
     * Loads the appropriate Chatdata into the currently active chat
     * @param allMessages All messages loaded into the Application
     * @returns All messages belonging to the currently active chat
     */
    private loadChatData (allMessages: ChatMessageModel[]): ChatMessageModel[]{
        const convMsg = [] as Array<ChatMessageModel>
        allMessages.forEach(element => {
            if (element.conv_id === this._active_chat.conv_id){
                convMsg.push(element);
            }
        });
        return convMsg;
    }

    /**
     * Handles the ChatMessage Generation for the Chatbot
     * @param message Message sent to the Chatbot
     * @returns Formatted ChatMessageModel
     */
    public async sendMessageToChatbot(message: string): Promise<any>{
        try {
            const chatbotanswer = await this._apicontroller.sendGetRequestToChatbot(message);
            console.log(chatbotanswer)
            this.newChatBotMessage(chatbotanswer.message)
            return await chatbotanswer;
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Creates a new User Message
     * @param message Text of the Message
     * @returns ChatMessageModel Object with the appropriate settings
     */
    public newUserMessage(message: string): ChatMessageModel {
        const templateMsg = new ChatMessageModel (
            this.chatdata.length,
            this.active_chat.conv_id,
            this.active_chat.user.displayname,
            this.active_chat.user.avatar,
            [message],    
            new TimeStampModel('2022-12-28 14:33:21')/*this.createDateObject()*/,
            true,
            'primary'
        )
        this.chatdata.unshift(templateMsg);
        return templateMsg;
    }

    /**
     * Creates a new ChatBot Message
     * @param message Text of the Message
     * @returns ChatMessageModel Object with the appropriate settings
     */
    public newChatBotMessage(message: string): ChatMessageModel {
        const templateMsg = new ChatMessageModel (
            this.chatdata.length,
            this.active_chat.conv_id,
            this.active_chat.bot.displayname,
            this.active_chat.bot.avatar,
            [message],
            new TimeStampModel('2022-12-28 14:33:21')/*this.createDateObject()*/,
            false,
            this.active_chat.bot.bgcolor
        )
        this.chatdata.unshift(templateMsg);
        return templateMsg;
    }

    private createDateObject (): TimeStampModel {
        //TODO Creating a proper new DateObject
        return new TimeStampModel('')
    }

    /**
     * Getter Function of the Property active_chat
     */
    get active_chat(): ChatModel {
        return this._active_chat;
    }
    /**
     * Setter Function of the Property active_chat
     * @param value Value to be set
     */
    set active_chat(value) {
        this._active_chat = value
    }

    /**
     * Getter Function of the Property apicontroller
     */
    get apicontroller(): APIController  {
        return this._apicontroller;
    }
    /**
     * Setter Function of the Property active_chat
     * @param value Value to be set
     */
    set apicontroller(value) {
        this._apicontroller = value
    }

    /**
     * Getter Function of the Property apicontroller
     */
    get chatdata(): ChatMessageModel[]  {
        return this._chatdata;
    }
    /**
     * Setter Function of the Property active_chat
     * @param value Value to be set
     */
    set chatdata(value) {
        this._chatdata = value
    }
}