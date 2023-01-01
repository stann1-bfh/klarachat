export default class ChatModel {
    private _conv_id?: number;

    constructor()
    constructor(conv_id?: number){
        this._conv_id = conv_id;
    }
}