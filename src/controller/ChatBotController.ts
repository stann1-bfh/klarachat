import ChatBotModel from 'src/model/ChatBotModel';

export default class ChatBotController {
    private _active_bot: ChatBotModel;
    private _allbots: ChatBotModel[];

    constructor(allbots: ChatBotModel[], active: ChatBotModel){
        this._allbots = allbots;
        this._active_bot = active;
    }

    /**
     * Getter Function of the Property active_bot
     */
    get active_bot(): ChatBotModel {
        return this._active_bot;
    }
    /**
     * Setter Function of the Property active_bot
     * @param value Value to be set
     */
    set active_bot(value) {
        this._active_bot = value
    }

    /**
     * Getter Function of the Property allbots
     */
    get allbots(): ChatBotModel[]  {
        return this._allbots;
    }
    /**
     * Setter Function of the Property allbots
     * @param value Value to be set
     */
    set allbots(value) {
        this._allbots = value
    }
}