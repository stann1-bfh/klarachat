import TimeStampModel from './TimeStampModel';

export default class ChatMessageModel {
    private _id: number;
    private _conv_id: number;
    private _name: string;
    private _avatar: string;
    private _text: string[];
    private _stamp: TimeStampModel;
    private _sent: boolean;
    private _bgcolor: string;

    /**
     * Construtor of a Chat Message
     * @param id ID of the Chat sent
     * @param conv ID of the Conversation the chat has been sent
     * @param name Name of the User sending the Chat
     * @param avatar Name of the Picture of the sender
     * @param text Text being sent
     * @param stamp Timestamp of the message being sent
     * @param sent True if sent by the user, false if sent by the Chatbot
     * @param bgcolor Backgroundcolor of the message
     */
    constructor (id: number, conv: number, name: string, avatar: string,
                text: string[], stamp: TimeStampModel, sent: boolean, bgcolor: string) {
        this._id = id;
        this._conv_id = conv;
        this._name = name;
        this._avatar = avatar;
        this._text = text;
        this._stamp = stamp;
        this._sent = sent;
        this._bgcolor = bgcolor
    }

    /**
     * Automatically formats the current Date into desired TimeStamp for ChatMessage
     * @returns Formatted Timestamp
     */
    public getCurrentTimeDateStamp (): string {
        return ''
    }

    /**
     * Getter Function of the Property ID
     */
    get id(): number {
        return this._id;
    }
    /**
     * Setter Function of the Property ID
     * @param value Value to be set
     */
    set id(value) {
        this._id = value;
    }

    /**
     * Getter Function of the Property conv
     */
    get conv_id(): number {
        return this._conv_id;
    }
    /**
     * Setter Function of the Property conv
     * @param value Value to be set
     */
    set conv_id(value) {
        this._conv_id = value;
    }

    /**
     * Getter Function of the Property name
     */
    get name(): string {
        return this._name;
    }
    /**
     * Setter Function of the Property name
     * @param value Value to be set
     */
    set name(value) {
        this._name = value;
    }

    /**
     * Getter Function of the Property avatar
     */
    get avatar(): string {
        return this._avatar;
    }
    /**
     * Setter Function of the Property avatar
     * @param value Value to be set
     */
    set avatar(value) {
        this._avatar = value;
    }

    /**
     * Getter Function of the Property text
     */
    get text(): string[] {
        return this._text;
    }
    /**
     * Setter Function of the Property text
     * @param value Value to be set
     */
    set text(value) {
        this._text = value;
    }

    /**
     * Getter Function of the Property stamp
     */
    get stamp(): TimeStampModel {
        return this._stamp;
    }
    /**
     * Setter Function of the Property stamp
     * @param value Value to be set
     */
    set stamp(value) {
        this._stamp = value;
    }

    /**
     * Getter Function of the Property sent
     */
    get sent(): boolean {
        return this._sent;
    }
    /**
     * Setter Function of the Property sent
     * @param value Value to be set
     */
    set sent(value) {
        this._sent = value;
    }

    /**
     * Getter Function of the Property bgcolor
     */
    get bgcolor(): string {
        return this._bgcolor;
    }
    /**
     * Setter Function of the Property bgcolor
     * @param value Value to be set
     */
    set bgcolor(value) {
        this._bgcolor = value;
    }
}