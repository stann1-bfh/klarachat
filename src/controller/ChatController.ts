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

    /**
     * Constructor
     * @param apicontroller Initiated API Instance
     * @param chatdata All imported Chatdata
     * @param active_chat Currently active chat
     */
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
     * @returns Returns 1 if successful, 2 if unsuccessful
     */
    public async sendMessageToChatbot(message: string): Promise<any>{
        try {
            const chatbotanswer = await this._apicontroller.sendGetRequestToChatbot(message);
            console.log(chatbotanswer)
            this.newChatBotMessage(chatbotanswer.message)
            return 1;
        } catch (error) {
            console.error(error)
            return 2;
        }
    }

    /**
     * Creates a new User Message
     * @param message Text of the Message
     * @returns Returns 1 if successful, 2 if unsuccessful
     */
    public newUserMessage(message: string): number {
        try {
            const templateMsg = new ChatMessageModel (
                this.chatdata.length + 1,
                this.active_chat.conv_id,
                this.active_chat.user.displayname,
                this.active_chat.user.avatar,
                [message],    
                this.createCurrentDateTimeStampModel(),
                true,
                'primary'
            )
            this.chatdata.unshift(templateMsg);
            return 1;
        } catch (error) {
            console.error(error)
            return 0;
        }  
    }

    /**
     * Creates a new ChatBot Message
     * @param message Text of the Message
     * @returns Returns 1 if successful, 2 if unsuccessful
     */
    public newChatBotMessage(message: string): number {
        try {
            const templateMsg = new ChatMessageModel (
                this.chatdata.length + 1,
                this.active_chat.conv_id,
                this.active_chat.bot.displayname,
                this.active_chat.bot.avatar,
                [message],
                this.createCurrentDateTimeStampModel(),
                false,
                this.active_chat.bot.bgcolor
            )
            this.chatdata.unshift(templateMsg);
            return 1;
        } catch (error) {
            console.error(error);
            return 2;
        }
        
    }

    /**
     * Creates a new TimeStampModel of the current Time
     * @returns Current TimeStampModel
     */
    private createCurrentDateTimeStampModel (): TimeStampModel {
        const currentDateTime: Date = new Date();
        const currentYear = this.formatTo2Digits(currentDateTime.getUTCFullYear());
        const currentMonth = this.formatTo2Digits((currentDateTime.getUTCMonth() + 1));
        const currentDay = this.formatTo2Digits(currentDateTime.getUTCDate());
        const currentHour = this.formatTo2Digits(currentDateTime.getHours());
        const currentMin = this.formatTo2Digits(currentDateTime.getMinutes());
        const currentSec =this.formatTo2Digits( currentDateTime.getSeconds());
        const currentDateTimeString = (currentYear 
        + '-' + currentMonth 
        + '-' + currentDay 
        + ' ' + currentHour
        + ':' + currentMin
        + ':' + currentSec)
        return new TimeStampModel(currentDateTimeString)
    }

    /**
     * Formats a single digit number to a double digit string (3 => 03)
     * @param value Single digit value in double digit string format
     */
    private formatTo2Digits(value: number): string{
        if (value < 10 && value >= 0) {
            return '0' + value.toString();
        } else if ( value < 0 ){
            return '0';
        } else{
            return value.toString();
        }
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