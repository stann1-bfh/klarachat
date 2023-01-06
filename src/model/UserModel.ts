export default class UserModel {
    private _uid: number;
    private _username: string;
    private _password: string;
    private _displayname: string;
    private _avatar: string;

    /**
     * Constructor
     * @param uid User ID
     * @param un Username
     * @param pw Password
     * @param dn Displayname
     * @param av Avatar Filename
     */
    constructor(uid: number, un: string, pw: string, dn: string, av: string){
        this._uid = uid;
        this._username = un;
        this._password = pw;
        this._displayname = dn;
        this._avatar = av;
    }

    /**
     * Getter Function of the Property uid
     */
    get uid(): number {
        return this._uid;
    }
    /**
     * Setter Function of the Property uid
     * @param value Value to be set
     */
    set uid(value) {
        this._uid = value
    }

    /**
     * Getter Function of the Property username
     */
    get username(): string {
        return this._username;
    }
    /**
     * Setter Function of the Property username
     * @param value Value to be set
     */
    set username(value) {
        this._username = value
    }

    /**
     * Getter Function of the Property password
     */
    get password(): string {
        return this._password;
    }
    /**
     * Setter Function of the Property password
     * @param value Value to be set
     */
    set password(value) {
        this._password = value
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
}