import UserModel from 'src/model/UserModel';

export default class UserController {
    private _active_user: UserModel;
    private _allusers: UserModel[];

    constructor(allusers: UserModel[], active: UserModel){
        this._allusers = allusers;
        this._active_user = active;
    }

    /**
     * Getter Function of the Property active_user
     */
    get active_user(): UserModel {
        return this._active_user;
    }
    /**
     * Setter Function of the Property active_user
     * @param value Value to be set
     */
    set active_user(value) {
        this._active_user = value
    }

    /**
     * Getter Function of the Property allusers
     */
    get allusers(): UserModel[]  {
        return this._allusers;
    }
    /**
     * Setter Function of the Property allusers
     * @param value Value to be set
     */
    set allusers(value) {
        this._allusers = value
    }
}