import ChatBotModel from './ChatBotModel';
import UserModel from './UserModel';

export default class ChatModel {
    private _conv_id: number;
    private _bot: ChatBotModel;
    private _user: UserModel;

    /**
     * Constructor
     * @param conv_id ID of the currently active Chat
     * @param bot Currently active Chatbot
     * @param user Currently active User
     */
    constructor(conv_id: number, bot: ChatBotModel, user: UserModel){
        this._conv_id = conv_id;
        this._bot = bot;
        this._user = user;
    }

    /**
     * Getter Function of the Property active_chat
     */
    get conv_id(): number {
        return this._conv_id;
    }
    /**
     * Setter Function of the Property active_chat
     * @param value Value to be set
     */
    set conv_id(value) {
        this._conv_id = value
    }

    /**
     * Getter Function of the Property bot
     */
    get bot(): ChatBotModel {
        return this._bot;
    }
    /**
     * Setter Function of the Property bot
     * @param value Value to be set
     */
    set bot(value) {
        this._bot = value
    }

    /**
     * Getter Function of the Property user
     */
    get user(): UserModel {
        return this._user;
    }
    /**
     * Setter Function of the Property user
     * @param value Value to be set
     */
    set user(value) {
        this._user = value
    }
}