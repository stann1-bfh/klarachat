import { boot } from 'quasar/wrappers';
import axios from 'axios'
import { AppSettings } from './appsettings';
import APIController from 'src/controller/APIController';
import ChatController from 'src/controller/ChatController';
import chatdata from 'src/data/chatmessages.json'
import chatbots from 'src/data/chatbots.json'
import users from 'src/data/users.json'
import ChatMessageModel from 'src/model/ChatMessageModel';
import ChatModel from 'src/model/ChatModel';
import ChatBotModel from 'src/model/ChatBotModel';
import UserModel from 'src/model/UserModel';
import UserController from 'src/controller/UserController';
import ChatBotController from 'src/controller/ChatBotController';
import TimeStampModel from 'src/model/TimeStampModel';

//Pre-Initialization
const axiosInstance = axios.create({baseURL: AppSettings.HTTP_KLARABOT_API_ADDRESS});
const allbots = new Array<ChatBotModel>();
const allusers = new Array<UserModel>();
const klarachatData = new Array<ChatMessageModel>();

//Get all Chatdata
chatdata.forEach(message => {
  const tempObject = new ChatMessageModel(
    message.id,
    message.conv_id,
    message.name,
    message.avatar,
    message.text,
    new TimeStampModel(message.stamp),
    message.sent,
    message.bgcolor
  )
  klarachatData.length === 0 ? klarachatData.push(tempObject) : klarachatData.unshift(tempObject);
})
//Get all Chatbots
chatbots.forEach(bot => {
  allbots.push(new ChatBotModel(bot.bid, bot.displayname, bot.avatar, bot.bgcolor));
})

//Get all Users
users.forEach(user => {
  allusers.push(new UserModel(user.uid, user.username, user.password, user.displayname, user.avatar));
})

//Initializing Controllers
const usercontroller = new UserController(allusers, allusers[0]);
const chatbotcontroller = new ChatBotController(allbots, allbots[0]);
const apicontroller = new APIController(axiosInstance);
const klarachat = new ChatModel(1, chatbotcontroller.active_bot, usercontroller.active_user);
const chatcontroller = new ChatController(apicontroller, klarachatData, klarachat);

// Type declaration
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
        $apicontroller: typeof apicontroller;
        $chatcontroller: typeof chatcontroller;
        $klarachatData: typeof klarachatData;
        $usercontroller: typeof usercontroller;
        $chatbotcontroller: typeof chatbotcontroller;
  }
}

export default boot(({ app }) => {
  //Set global variables
  app.config.globalProperties.$apicontroller = apicontroller
  app.config.globalProperties.$chatcontroller = chatcontroller
  app.config.globalProperties.$klarachatData = klarachatData
  app.config.globalProperties.$usercontroller = usercontroller
  app.config.globalProperties.$chatbotcontroller = chatbotcontroller
});

export { apicontroller, chatcontroller, klarachatData };