import { AxiosInstance } from 'axios';

export default class APIController {
    private api: AxiosInstance;
    /**
     * Constructor
     * @param axios Initiated Axios Instance
     */
    constructor (axios: AxiosInstance) {
        this.api = axios;
    }

    /**
     * Sends the GET-Request to the Klarabot REST-API
     * @param message Message to be sent to the Chatbot
     * @returns Answer with confidence-value from the Chatbot with 
     */
    public async sendGetRequestToChatbot(message: string): Promise<any>{
        try {
            const snapshot = await this.api.get('klarabotapi?message=' + message)
            const data = snapshot.data;
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}