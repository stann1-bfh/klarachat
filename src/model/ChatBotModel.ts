export default class ChatBotModel {
    private _bid: number;
    private _displayname: string;
    private _avatar: string;
    private _bgcolor: string;

    constructor(bid: number, dn: string, av: string, bgcolor: string){
        this._bid = bid;
        this._displayname = dn;
        this._avatar = av;
        this._bgcolor = bgcolor;
    }

    /**
     * Getter Function of the Property bid
     */
    get bid(): number {
        return this._bid;
    }
    /**
     * Setter Function of the Property bid
     * @param value Value to be set
     */
    set bid(value) {
        this._bid = value
    }

    /**
     * Getter Function of the Property displayname
     */
    get displayname(): string {
        return this._displayname;
    }
    /**
     * Setter Function of the Property displayname
     * @param value Value to be set
     */
    set displayname(value) {
        this._displayname = value
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
        this._avatar = value
    }

    /**
     * Getter Function of the Property avatar
     */
    get bgcolor(): string {
        return this._bgcolor;
    }
    /**
     * Setter Function of the Property avatar
     * @param value Value to be set
     */
    set bgcolor(value) {
        this._bgcolor = value
    }
}