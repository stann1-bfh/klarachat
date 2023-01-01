import { boot } from 'quasar/wrappers';
import axios from 'axios'
import { AppSettings } from './appsettings';
import APIController from 'src/controller/APIController';
import ChatController from 'src/controller/ChatController';
import chatdata from 'src/data/chatmessages.json'
import { KlaraChatMessage } from 'src/model/ChatMessageModel';

//Pre-Initialization
const params = {
    baseURL: AppSettings.HTTP_KLARABOT_API_ADDRESS
}
const axiosInstance = axios.create(params);

//Get all Chatdata
const klarachatData = new Array<KlaraChatMessage>();
//FIXME Importing Logic needs to be adjusted then Data Structure is changed.
chatdata.forEach(message => {
  klarachatData.length === 0 ? klarachatData.push(message) : klarachatData.unshift(message);
})

//Initializing Controllers
const apicontroller = new APIController(axiosInstance);
const chatcontroller = new ChatController(apicontroller, klarachatData);

// Type declaration
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
        $apicontroller: typeof apicontroller;
        $chatcontroller: typeof chatcontroller;
        $klarachatData: typeof klarachatData;
  }
}

export default boot(({ app }) => {
  //Set global variables
  app.config.globalProperties.$apicontroller = apicontroller
  app.config.globalProperties.$chatcontroller = chatcontroller
  app.config.globalProperties.$klarachatData = klarachatData
});

export { apicontroller, chatcontroller, klarachatData};